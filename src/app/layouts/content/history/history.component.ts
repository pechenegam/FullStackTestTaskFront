import {Component} from '@angular/core';
import {Conversion} from "../../../models/conversion";
import {ActivatedRoute} from "@angular/router";
import {Team} from "../../../models/team";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  readonly conversions = this.activatedRoute.snapshot.data['team'] as Team[];

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
