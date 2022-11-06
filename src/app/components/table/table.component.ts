import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource} from "@angular/material/table";
import { Column } from "./Column";
import { Row } from "./Row";
import { MatSort } from "@angular/material/sort";
import * as $ from 'jquery';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit {

  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<T> = [];
  @Input() rowCustom!: Row;
  // @Output() rowClick = new EventEmitter();

  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  @ViewChild(MatSort) sort = new MatSort();


  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.displayedColumns =
      this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource<T>(this.tableData);
    this.dataSource.sort = this.sort;

  }

  setRoute(id: number | undefined) {

  }

}
