import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../interfaces/Student';
import { StudentService } from "../../services/student.service";
import { Column } from "../table/Column";
import { Row } from "../table/Row";
import * as moment from "moment";
import { Observable, Subscription } from "rxjs";
import { Router, RouterLink, Routes } from "@angular/router";


@Component({
  providers: [StudentService],
  selector: 'app-students-listAll',
  templateUrl: './student-listAll.component.html',
  styleUrls: ['./student-listAll.component.css']
})
export class StudentListAllComponent implements OnInit {
  title: string = "List";
  students$: Observable<Student[]> | undefined;

  rowCustom: Row = {
    isLink: true,
    routerLink: (id: number) => `/student-detail/${id}`
  };

  tableColumns: Array<Column> = [
    {
      columnDef: 'firstName',
      header: 'First Name',
      cell: (element: Record<string, any>) => `${element['firstName']}`,
      isSortable: true
    },
    {
      columnDef: 'lastName',
      header: 'Last Name',
      cell: (element: Record<string, any>) => `${element['lastName']}`,
      isSortable: true
    },
    {
      columnDef: 'subject',
      header: 'Subject',
      cell: (element: Record<string, any>) => `${element['subject']}`,
      isSortable: true
    },
    {
      columnDef: 'nextLesson',
      header: 'Next Lesson',
      cell: (() => {})
    }

    // {
    //   columnDef: 'email',
    //   header: 'e-mail',
    //   cell: (element: Record<string, any>) => `${element['email']}`
    // },
    // {
    //   columnDef: 'dateOfBirth',
    //   header: 'Date of birth',
    //   cell: (element: Record<string, any>) => moment(`${element['dateOfBirth']}`).format("DD.MM.YYYY")
    // },
    // {
    //   columnDef: 'mobilePhone',
    //   header: 'Mobile',
    //   cell: (element: Record<string, any>) => `${element['mobilePhone']}`
    // }

  ];

  @Output() btnClick = new EventEmitter()

  constructor(private studentService: StudentService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.students$ = this.studentService.students$;
  }

  ngOnDestroy(): void {
  }

  onGetStudents(): void {

  }

  // setRouteByStudent(id: number | undefined): any {
  //   this.btnClick.emit();
  //   this.route.navigate(['/student-detail', {id: id}]).then(r => {
  //
  //   });
  // }

  test(): void {
    this.route.navigate(['/student-add']).then(r => {
      console.log(this.route);
    });
  }
}
