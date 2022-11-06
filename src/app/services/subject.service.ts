import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Student } from "../../interfaces/Student";
import { catchError, Observable, shareReplay, switchMap, tap } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import {Subject} from  "../../interfaces/Subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUri = "http://localhost:8080/api/v1/subjects";

  constructor(private http: HttpClient) {
  }

  subjects$: Observable<Subject[]> =
    this.http.get<Subject[]>(`${this.baseUri}`).pipe(shareReplay());

}
