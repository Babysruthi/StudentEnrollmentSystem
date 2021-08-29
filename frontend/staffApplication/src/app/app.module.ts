import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
 import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffModuleComponent } from './staff-module/staff-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MainComponent } from './main/main.component';
import { StudentEnrollListComponent } from './student-enroll-list/student-enroll-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StaffLoginComponent,
    StaffModuleComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ViewProfileComponent,
    MainComponent,
    StudentEnrollListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
