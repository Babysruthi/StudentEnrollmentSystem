import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8086/students';
  constructor(private http:HttpClient) { }
  saveDetails(studentSignupDetails:object,rollNo:any):Observable<any>{
    console.log("add method");
    return this.http.post(`${this.baseUrl}`+'/studentAssignInsertion/'+`${rollNo}`+'/studentinsertion',studentSignupDetails);
  }
  deleteStudentDetails(rollNo:any):Observable<any>
  {
    console.log("delete method")
    return this.http.delete(`${this.baseUrl}`+'/deleteStudent/'+`${rollNo}`,{responseType:'text'})
  }
  getStudentDetailsById(rollNo:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/getAllstudentAssign/'+`${rollNo}`+'/getParticularStudent');
  }
  updateStudentDetails(personalId:any,studentDetails:any):Observable<any>{
    return this.http.put(`${this.baseUrl}`+'/updateStudent/'+`${personalId}`,studentDetails)
  }
}
