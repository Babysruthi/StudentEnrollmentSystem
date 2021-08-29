import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaffLogin } from './staff-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'staffApplication';
  constructor(private router:Router)
  {
    
  }
   
}
