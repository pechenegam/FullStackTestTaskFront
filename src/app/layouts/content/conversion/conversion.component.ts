import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExchangeRate} from "../../../models/exchange-rate";
import {FormBuilder, FormControl, ValidatorFn, Validators} from "@angular/forms";
import {merge, Subject, takeUntil} from "rxjs";
import {ConversionService} from "../../../services/conversion.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

const SUM_TO = 'sumTo';
const SUM_FROM = 'sumFrom';
const RATE_TO = 'rateTo';
const RATE_FROM = 'rateFrom';
const SUM_REG_EXP = new RegExp('^\\s*[0-9]+[.]*[0-9]*\\s*$');

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit, OnDestroy {

  private readonly destroyed = new Subject<void>();
  readonly exchangeRates = this.activatedRoute.snapshot.data['exchangeRates'] as ExchangeRate[];
  readonly form = this.formBuilder.group({
    [RATE_FROM]: new FormControl(null, [Validators.required]),
    [RATE_TO]: new FormControl(null, [Validators.required]),
    [SUM_FROM]: new FormControl(null, [Validators.required, Validators.min(0), this.isNumberValidator()]),
    [SUM_TO]: new FormControl({value: null, disabled: true}, [Validators.required])
  }, {validators: [this.sameRateValidator()]});

  constructor(private formBuilder: FormBuilder,
              private conversionService: ConversionService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    merge(
      this.form.get(SUM_FROM).valueChanges,
      this.form.get(RATE_FROM).valueChanges,
      this.form.get(RATE_TO).valueChanges
    ).pipe(takeUntil(this.destroyed))
      .subscribe(() => this.updateSumTo());
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  convert(): void {
    this.conversionService.convert(
      this.form.get(SUM_FROM).value,
      this.form.get(RATE_FROM).value,
      this.form.get(RATE_TO).value,
    ).subscribe(value =>{
      this.form.get(SUM_TO).setValue(value.toValue);
      this.notifyConverted();
    });
  }

  private notifyConverted(): void {
    this.snackBar.open('Converted', '', {duration: 500});
  }

  private updateSumTo(): void {
    const sumFrom = this.form.get(SUM_FROM).value;
    const rateFrom = this.form.get(RATE_FROM).value?.rate;
    const rateTo = this.form.get(RATE_TO).value?.rate;
    if (sumFrom && this.isNumberString(sumFrom) && rateFrom && rateTo) {
      const sumTo = sumFrom / rateFrom * rateTo;
      this.form.get(SUM_TO).setValue(this.round(sumTo));
    }
  }

  private isNumberValidator(): ValidatorFn {
    return (formControl: FormControl) => {
      const isValid = formControl.value && this.isNumberString(formControl.value)
      && parseFloat(formControl.value)===this.round(parseFloat(formControl.value));
      return isValid ? null : {notNumber: true};
    };
  }

  private sameRateValidator(): ValidatorFn {
    return (formControl: FormControl) => {
      const rateTo = formControl.get(RATE_TO)?.value as ExchangeRate;
      const rateFrom = formControl.get(RATE_FROM)?.value as ExchangeRate;
      const isValid = !rateTo || !rateFrom || rateTo.id !== rateFrom.id;
      return isValid ? null : {sameRate: true};
    };
  }

  private isNumberString(value: string): boolean {
    return SUM_REG_EXP.test(value)
  }

  private round(num: number): number {
    return Math.round(num * 1000) / 1000;
  }
}
