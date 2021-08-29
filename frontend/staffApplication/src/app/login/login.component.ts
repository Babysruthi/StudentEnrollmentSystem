import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffLogin } from '../staff-login';
import { StaffLoginService } from '../staff-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  staff:StaffLogin=new StaffLogin()
  public formData = new FormGroup({
    loginId: new FormControl(''),
    password: new FormControl('')
  });

  public logindata:Observable<StaffLogin[]> | any

  //public logindata?:StaffLogin[]=[] 

  constructor(private staffService:StaffLoginService,private router: Router) { }

  ngOnInit(): void {
    

    }

  login(formData:any)
  {
    this.staffService.getStaff(this.formData.get('loginId')?.value).subscribe(data=>
      {
        this.logindata=data
        console.log(this.logindata)
        for(var i = 0; i < this.logindata.length; i++)
      { 
        console.log(this.logindata[i].userId);
          console.log(this.logindata[i].loginId); 
          
          console.log(this.logindata[i].password);
          if(this.logindata[i].loginId==this.formData.get('loginId')?.value&&this.logindata[i].password==this.formData.get('password')?.value)
          {
            localStorage.setItem("user",this.logindata[i].loginId)
            this.router.navigate(['staffMain'])
          }
         
         if(this.logindata[i].loginId!=this.formData.get('loginId')?.value&&this.logindata[i].password!=this.formData.get('password')?.value)
          {
            window.alert("Enter valid user or password")
          }

          if(this.logindata[i].password!=this.formData.get('password')?.value)
          {
            window.alert("Enter valid password")
          }
      }
      })
     
  }

 
  onClickMe() {
    this.router.navigate(['forgotPass'])
  }

 
}
