import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateMax]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateMaxDirective, multi: true }
  ]
})
export class ValidateMaxDirective implements Validator {

  @Input() validateMax: number;
  constructor(el: ElementRef) {
  }

  validate(control: AbstractControl): { [key: string]: any; } {
    //当前控件的值
    let cValue = control.value;
    if(cValue !== null && cValue !== undefined) {

      let value = Number(cValue);
      let max = Number(this.validateMax);
  
      if(isNaN(value) || isNaN(max)) {
        return null;
      }

      if(value > max) {
        return {
          validateMax: true
        }
      }
    }
    return null;
  }
}
