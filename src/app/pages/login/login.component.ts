import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { post } from "../../common/httpHelper";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService],
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  public vvv: string = "";

  @Output()
  public onLogin = new EventEmitter<Object>();

  constructor(
    public http: Http,
    public element: ElementRef,
    public router: Router,
    public loginService: LoginService
  ) {

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
    this.loginService.login({
      data: this.loginForm.value,
      onSuccess: () => {
        this.router.navigateByUrl('main');
      }
    })
  }

}





