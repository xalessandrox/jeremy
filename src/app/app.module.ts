import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { BodyComponent } from './components/body/body.component';
import { StudentListAllComponent } from './components/student-listall/student-listAll.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from "@angular/material/sort";
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { DatepickerDirective } from './directives/datepicker.directive';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    BodyComponent,
    StudentListAllComponent,
    StudentAddComponent,
    NavLeftComponent,
    StudentDetailComponent,
    DatepickerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatTabsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
