import { Subj } from "./Subj";

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  email?: string;
  subjects: string[];
  mobilePhone: string;
  dateOfBirth?: string;
  routerLink?: string;
  nextLesson?: string;
}
