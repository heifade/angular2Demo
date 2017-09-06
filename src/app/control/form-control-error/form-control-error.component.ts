import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validator, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.less'],
})
export class formControlErrorComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() controlCanTouch: boolean = true;

  public ctrl: AbstractControl;
  public isErrorDetailShow: boolean;

  constructor() {

  }

  ngOnInit(): void {
    
  }

  showErrorDetail(isShow: boolean) {
    this.isErrorDetailShow = isShow;
  }

  isShowError() {
    let ctrl = this.form.controls[this.controlName];
    this.ctrl = ctrl;
    return ctrl.invalid && (ctrl.dirty || !this.controlCanTouch || ctrl.touched);
  }

}



