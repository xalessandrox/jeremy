import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";
import { StudentListAllComponent } from "./components/student-listall/student-listAll.component";
import { StudentAddComponent } from "./components/student-add/student-add.component";

const routes: Routes = [
  {path: 'student-listall', component: StudentListAllComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-listall/student-update/:student', component: StudentDetailComponent},
  {path: 'student-add', component: StudentAddComponent},
  {path: '',   redirectTo: '/student-listall', pathMatch: 'full'},
  {path: '**', redirectTo: '/student-listall'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
