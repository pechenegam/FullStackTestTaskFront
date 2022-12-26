import {Component} from '@angular/core';
import {Conversion} from "../../../models/conversion";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  readonly conversions = this.activatedRoute.snapshot.data['conversions'] as Conversion[];

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
