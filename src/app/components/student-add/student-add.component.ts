import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { Student } from "../../../interfaces/Student";
import * as moment from "moment";
import { SubjectService } from "../../services/subject.service";
import * as $ from 'jquery';
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from "rxjs";
import { Subject } from "../../../interfaces/Subject";
import { Subj } from "../../../interfaces/Subj";


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit {

  // subjectsDropdownList: Observable<Subject[]> | undefined;
  subjectsDropdownList: Subj[] = [];
  dropDownSettings: IDropdownSettings = {}
  selectedSubjects: any = [];
  toPersistSubjects: Subject[] = [];

  constructor(private studentService: StudentService,
              private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    // this.subjectsDropdownList = this.subjectService.subjects$;

    for (const value of Object.values(Subj)) {
      console.log('value: ' + value);
      if(typeof value !== "string") {
        continue;
      }
      // @ts-ignore
      this.subjectsDropdownList.push(value);
    }
console.log(this.subjectsDropdownList);
    this.dropDownSettings = {
      enableCheckAll: false,
      defaultOpen: false,
      idField: 'item_id',
      textField: 'item_text'
    }
  }

  addStudent(data: any) {

    if (!moment(data.dateOfBirth).isValid()) {
      return;
    }

    const newStudent: Student = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: moment(data.dateOfBirth).toISOString(),
      email: data.email,
      mobilePhone: data.mobilePhone,
      subjects: this.extractSubjects()
    };

    this.studentService.addStudent(newStudent).subscribe();
  }

  extractSubjects(): string[] {
    let subjects: string[] = [];
    for (let i = 0; i < this.selectedSubjects.length; i++) {
      subjects.push(this.selectedSubjects[i]);
      }
    return subjects;
  }

  addSubject(item: any) {
    this.selectedSubjects.push(item);
    console.log("add: " + this.selectedSubjects);
  }

  removeSubject(item: any) {
    for (let i = 0; i < this.selectedSubjects.length; i++) {
      if (this.selectedSubjects[i] === item) {
        this.selectedSubjects.splice(i, 1);
      }
    }
  }
}
