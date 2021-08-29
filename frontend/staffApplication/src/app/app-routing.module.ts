import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffModuleComponent } from './staff-module/staff-module.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MainComponent } from './main/main.component';
import { StudentEnrollListComponent } from './student-enroll-list/student-enroll-list.component';




const routes: Routes = [
{path:'staffMain',component:StaffModuleComponent},
{path:'staffLogin',component:LoginComponent},
{path:'forgotPass',component:ForgotPasswordComponent},
{path:'resetPass',component:ResetPasswordComponent},
{path:'viewProfile',component:ViewProfileComponent},
{path:'main',component:MainComponent},
{path:'viewStudentList',component:StudentEnrollListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
