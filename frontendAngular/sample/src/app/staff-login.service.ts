import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class StaffLoginService {

  // private baseUrl='http://localhost:8086/staffLogin';
  constructor(private http:HttpClient) { }

  saveDetails(staffId:any,StaffLoginDetails:object):Observable<any>
  {
    return this.http.post('http://localhost:8086/staffLogin'+'/addstaff/'+`${staffId}`+'/addLoginCredentials',StaffLoginDetails);
  }

  getStaff(loginId:any):Observable<any>{
    return this.http.get('http://localhost:8086/staffLogin'+'/addLoginCredentials/'+`${loginId}`);
  }

  updateStaff(loginId:any,password:any,StaffLoginDetails:object):Observable<any>
  {
    return this.http.put('http://localhost:8086/staffLogin'+'/addLoginCredentials/'+`${loginId}`+'/'+`${password}`,StaffLoginDetails);
  }
}
