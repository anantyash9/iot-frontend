import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuarkusService {

  isRegistered:boolean=false;
  baseurl="/";
  

  constructor(private httpClient:HttpClient,private keycloakService:KeycloakService) { }
  register(image:Blob):Observable<any>{
    var form = new FormData();
    form.append("file", image, "file");
    return this.httpClient.post(this.baseurl+"api/employee/photo",form);
  }
  getProfile():Observable<any>{
    return this.httpClient.get(this.baseurl+"api/employee/profile",{responseType:'json'});
  }
  setRegistered(isRegistered:boolean){
    this.isRegistered=isRegistered;
  }
  getRegistered():boolean{
    return this.isRegistered;
  }
  getAttendence():Observable<any>{
    return this.httpClient.get(this.baseurl+"api/employee/attendance",{responseType:'json'});
}
}
