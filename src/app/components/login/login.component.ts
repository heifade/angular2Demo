import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { intValidator, floatValidator, maxValidator, minValidator } from '../../userValidator/userValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  @Output()
  public onLogin = new EventEmitter<Object>();

  constructor(public fb: FormBuilder,) {

  }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    let controlHash = {};
    controlHash["userName"] = new FormControl('',
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

    controlHash["password"] = new FormControl('',
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

    controlHash["picture"] = new FormControl('',
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

    this.loginForm = new FormGroup(controlHash);
  }

  login($event) {
    console.log(this.loginForm.value);
  }

}





