import { ValidatorFn, AbstractControl } from "@angular/forms";
import { isNullOrUndefinedOrTemp, isInt, isNumber } from '../common/utils';

// 整数验证器
export function intValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let value = control.value;
    if(isNullOrUndefinedOrTemp(value)) {
      return null;
    }
    return isInt(value) ? null: {'validateInt': true};
  };
}

// 浮点数验证器
export function floatValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let value = control.value;
    if(isNullOrUndefinedOrTemp(value)) {
      return null;
    }
    return isNumber(value) ? null: {'validateFloat': true};
  };
}

// 最大值验证器
export function maxValidator(maxValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let value = control.value;
    if(isNullOrUndefinedOrTemp(value)) {
      return null;
    }

    if(!isNumber(value)) {
      return null;
    }

    let number = Number(value);
    return number <= maxValue ? null: {'validateMax': {maxValue} };
  };
}

// 最小值验证器
export function minValidator(minValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let value = control.value;
    if(isNullOrUndefinedOrTemp(value)) {
      return null;
    }

    if(!isNumber(value)) {
      return null;
    }

    let number = Number(value);
    return number >= minValue ? null: {'validateMin': {minValue} };
  };
}

// 正则验证器
export function regValidator(reg: RegExp, errorName: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let value = control.value;
    if(isNullOrUndefinedOrTemp(value)) {
      return null;
    }

    const testValue = reg.test(value);
    return testValue ? {errorName: {value: value}} : null;
  };
}