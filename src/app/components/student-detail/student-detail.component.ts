import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { StudentService } from "../../services/student.service";
import { Student } from "../../../interfaces/Student";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import * as moment from "moment";
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import * as $ from 'jquery';
import { DateAdapter } from "@angular/material/core";
import {NgForm} from "@angular/forms";

// import * as datepicker from "../../directives/datepicker.directive";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @ViewChild(StudentService) id = StudentService;
  @ViewChild(MatDatepicker) datepicker = MatDatepicker<Date>;
  private data!: Observable<Student>;
  public student$!: Observable<Student> | undefined;
  public startDate!: Date;
  public isEditMode: boolean = false;
  public editButtonText: string = 'Edit';
  public studentId: number = 0;
  public student!: Student;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private adapter: DateAdapter<any>
  ) {

  }


  ngOnInit(): void {
    this.adapter.setLocale('de');
    this.activatedRoute.params.subscribe(param => {
      this.studentId = param['id'];
    })
    this.student$ = this.studentService.getStudentDetail(this.studentId);
    this.onGetStudent();
  }

  onGetStudent(): void {

    this.studentService.getStudentDetail(this.studentId)
      .subscribe((response) => {
        this.student = response;
        this.startDate = moment(response.dateOfBirth).toDate();
      });
  }

  // $('#datepicker').text(moment(this.student.dateOfBirth).toString);
  // this.startDate = moment(Date.parse(this.student.dateOfBirth!)).toString();


  getFormattedDate(usFormat: string | undefined): string {
    return moment(usFormat).format("DD.MM.YYYY");
  }

  editOrSaveIt() {
    this.isEditMode = !this.isEditMode;
    this.editButtonText = this.isEditMode ? 'Save' : 'Edit';
    this.setInputDisabledIfNotEdit();
  }

  setInputDisabledIfNotEdit() {
    // $('input[type="text"]').attr("disabled",
    //   this.isEditMode ? "false" : "true");
    if (!this.isEditMode) {
      $('input[type="text"], #matCal').attr("disabled", "true");
    } else if (this.isEditMode) {
      $('input[type="text"], #matCal').removeAttr("disabled");
    }
  }

  updateStudent(formOne: NgForm) {
    let updatedStudent: Student = {
      'id': this.studentId,
      'firstName': formOne.value.first_name,
      'lastName': formOne.value.last_name,
      'email': formOne.value.email,
      'dateOfBirth': formOne.value.date_of_birth,
      'mobilePhone': formOne.value.mobile_phone,
      'subjects': formOne.value.subjects
    };

    this.studentService.updateStudent(updatedStudent)
      .subscribe((response) => {
        this.student = response;
      });
    this.isEditMode = !this.isEditMode;
    this.setInputDisabledIfNotEdit();
  }

}
