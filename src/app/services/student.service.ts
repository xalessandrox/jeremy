import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Student } from "../../interfaces/Student";
import { catchError, Observable, shareReplay, Subject, switchMap, tap } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUri = environment.baseUri;
  routerLink?: string = this.baseUri;
  result?: Object;

  constructor(private http: HttpClient) {}

  getStudentDetail(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUri}/${id}`);
  }

  students$: Observable<Student[]> =
    this.http.get<Student[]>(`${this.baseUri}/getStudents`).pipe(shareReplay());

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUri}/updateStudent`, student);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUri}/addStudent`, student);
  }

}
