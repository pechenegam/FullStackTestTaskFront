import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ConversionTableModel} from "../../history/models/conversion-table-model";
import {Conversion} from "../../../../models/conversion";

@Component({
  selector: 'app-conversions-table',
  templateUrl: './conversions-table.component.html',
  styleUrls: ['./conversions-table.component.scss']
})
export class ConversionsTableComponent implements OnInit {

  @Input() conversions: Conversion[];
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  readonly displayedColumns = ['id', 'sumFrom', 'currencyFrom', 'sumTo', 'currencyTo', 'date'];
  readonly dataSource = new MatTableDataSource<ConversionTableModel>();

  ngOnInit(): void {
    this.initDataSource();
  }

  private initDataSource(): void {
    this.dataSource.data = this.generateDataSource(this.conversions);
    this.dataSource.sort = this.sort;
  }

  private generateDataSource(conversions: Conversion[]): ConversionTableModel[] {
    return conversions.map(conversion => ({
      id: conversion.id,
      currencyFrom: conversion.conversionFrom,
      currencyTo: conversion.conversionTo,
      sumFrom: conversion.fromValue,
      sumTo: conversion.toValue,
      date: new Date(conversion.createdDate)
    } as ConversionTableModel));
  }

}
