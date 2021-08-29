import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EnrollmentService } from '../enrollment.service';
import { StaffCourseAssign } from '../staff-course-assign';
import { StaffCourseAssignService } from '../staff-course-assign.service';
import { StaffLoginService } from '../staff-login.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-enroll-list',
  templateUrl: './student-enroll-list.component.html',
  styleUrls: ['./student-enroll-list.component.css']
})
export class StudentEnrollListComponent implements OnInit {

  StudentDetailsForm=new FormGroup(
    {
      courseCode:new FormControl(''),
      staffId:new FormControl('')
    }
  )
  courseDetails:string[]| any
  i:Number|any
  studentDetails:Observable<Number[]>|any
  public student:Observable<Student[]>|any
  constructor(private courseService:StaffCourseAssignService, private enroll:EnrollmentService,
     private stud:StudentService) { }
  loginId=localStorage.getItem("user")
  
  ngOnInit(): void {
      console.log(this.loginId)
  }

getCourse()
{
  
  this.courseService.getStudentEnrollDetails(this.loginId)
  .subscribe(data=>
    {
      this.courseDetails=data
      console.log(this.courseDetails)
    })
}

onSubmit()
{

  this.enroll.getStudentList(this.StudentDetailsForm.get('courseCode')?.value,this.loginId).subscribe(
    data=>{
      this.studentDetails=data
    }
      )
      for(this.i=0;this.i<this.student.length;this.i++)
      console.log(this.student[this.i])
     
    }
  
 

}
