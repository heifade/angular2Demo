import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { post } from "../../common/httpHelper";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  @Output()
  public onLogin = new EventEmitter<Object>();

  constructor(public http: Http, public element: ElementRef, public router: Router) {

  }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    let controlHash = {};
    controlHash["userName"] = new FormControl('djd',
      [
        Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(6),
        // intValidator(),
        // floatValidator(),
        // maxValidator(100),
        // minValidator(10),
      ]
    );

    controlHash["password"] = new FormControl('djd',
      [
        Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(6),
        // intValidator(),
        // floatValidator(),
        // maxValidator(100),
        // minValidator(10),
      ]
    );

    // controlHash["picture"] = new FormControl('',
    //   [
    //     Validators.required,
    //     // Validators.minLength(1),
    //     // Validators.maxLength(6),
    //     // intValidator(),
    //     // floatValidator(),
    //     // maxValidator(100),
    //     // minValidator(10),
    //   ]
    // );

    this.loginForm = new FormGroup(controlHash);
  }

  login($event) {
    let formData = this.loginForm.value;
    let url = '/api/User/AdminLogin';

    post(this.http, url, {
      PhoneNo: formData.userName,
      Password: formData.password,
    })
      .then((res: Response) => {
        
        this.router.navigateByUrl('main');
      })
      .catch((e) => {
        console.log(111, e);
      }); 
  }

}





