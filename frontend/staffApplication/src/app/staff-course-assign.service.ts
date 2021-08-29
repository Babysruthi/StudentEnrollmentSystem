import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffCourseAssignService {

  
  // private baseUrl='http://localhost:8086/staffCourseAssign'
  constructor(private http:HttpClient) { }
  saveStaffCourseAssignDetails(staffId:any,courseCode:any,staffCourseAssignDetails:object):Observable<any>
  {
    return this.http.post('http://localhost:8086/staffCourseAssign'+'/addStaffAssign/'+`${staffId}`+'/addCourse/'+`${courseCode}`,staffCourseAssignDetails);
  }

  getStudentEnrollDetails(staffId:any)
  {
    return this.http.get('http://localhost:8086/staffCourseAssign'+'/addStaffAssign/'+`${staffId}`+'/getCourse')
  }
}
