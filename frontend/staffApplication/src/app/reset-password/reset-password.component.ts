import { Component, OnInit } from '@angular/core';
import { StaffLogin } from '../staff-login';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffLoginService } from '../staff-login.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public staff:StaffLogin|any
  public ResetFormData = new FormGroup({
    
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
    LoginId:new FormControl('')
  });

  public logindata:Observable<StaffLogin[]> | any
  constructor(private staffService:StaffLoginService,private router: Router) { }

  ngOnInit(): void {

   console.log( "user is "+localStorage.getItem('user'));
    

    }

   LoginId=localStorage.getItem('user')
    reset(ResetFormData:any)
    {
      this.staff=new StaffLogin();
     
    console.log( this.staff.LoginId)
    
    this.staff.currentPassword=this.ResetFormData.get('currentPassword')?.value;
    console.log( this.staff.currentPassword)
    this.staff.newPassword=this.ResetFormData.get('newPassword')?.value;
    console.log( this.staff.newPassword)
    this.staff.confirmPassword=this.ResetFormData.get('confirmPassword')?.value;
    console.log( this.staff.confirmPassword)
   
      this.staffService.getStaff(this.ResetFormData.get('LoginId')?.value).subscribe(data=>
        {
          this.logindata=data
          console.log(this.logindata)
          for(var i = 0; i < this.logindata.length; i++)
          { 
            console.log(this.logindata[i].loginId); 
            console.log("pass is ",this.logindata[i].password); 
         

         if(this.logindata[i].password!=this.ResetFormData.get('newPassword')?.value)
         {
           if(this.ResetFormData.get('newPassword')?.value==this.ResetFormData.get('confirmPassword')?.value)
           {
            this.staffService.updateStaff(this.logindata[i].loginId,this.ResetFormData.get('confirmPassword')?.value,this.staff)
            .subscribe(res=>
              {
                  console.log(res)
                 
              })
              window.alert("updated your password successfully!!")
           }
           else
           {
             window.alert("Enter same password and confirm password")
           }
         }
         else
         {
           window.alert("Your password is matched with previous password.. Enter new password")
         }
        }
        })

      

    }

}
