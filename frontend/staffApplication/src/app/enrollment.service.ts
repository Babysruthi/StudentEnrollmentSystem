import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient) { }

  getStudentList(courseCode:any,id:any)
  {
    return this.http.get('http://localhost:8086/enrollment'+'/course/'+`${courseCode}`+'/staff/'+`${id}`+'/getStudents')
  }
}
