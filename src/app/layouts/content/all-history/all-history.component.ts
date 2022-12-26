import {Component} from '@angular/core';
import {Conversion} from "../../../models/conversion";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-history',
  templateUrl: './all-history.component.html',
  styleUrls: ['./all-history.component.scss']
})
export class AllHistoryComponent {

  readonly conversions = this.activatedRoute.snapshot.data['conversions'] as Conversion[];

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
