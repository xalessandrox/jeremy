import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import { Routes, RouterModule } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'gui';
  opener = moment.parseZone(new Date())
    .local(true)
    .format("ddd DD MM YYYY");


  constructor() {

  }

  ngOnInit() {

  }


}
