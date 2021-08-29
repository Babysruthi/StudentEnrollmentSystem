import { Component, OnInit } from '@angular/core';
import { StaffLogin } from '../staff-login';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffLoginService } from '../staff-login.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  id=localStorage.getItem("user")
  staff:StaffLogin=new StaffLogin()
  public formData = new FormGroup({
    loginId: new FormControl('')
  });

  public logindata:StaffLogin | any
   constructor(private staffService:StaffLoginService,private router: Router) { }
  ngOnInit(): void {
  }

  login(formData:any)
  {
    this.staffService.getStaff(this.id).subscribe(data=>
      {
        this.logindata=data
        console.log(this.logindata)
      })
  }
}
