
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { post } from "app/common/httpHelper";

@Injectable()
export class LoginService {

  constructor(public http: Http) {
    
  }
  
  public login({data: {userName, password}, onSuccess}) {
    let url = '/api/User/AdminLogin';

    post(this.http, url, {
      PhoneNo: userName,
      Password: password,
    })
      .then((res: Response) => {
        onSuccess();
      })
      .catch((e) => {
        console.log(111, e);
      }); 
  }
}