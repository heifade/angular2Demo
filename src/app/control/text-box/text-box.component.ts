import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validator, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.less'],
})
export class TextBoxComponent implements OnInit {
  
  @Input() public label: string; //标题文字
  @Input() public checktype: string; //string(字符串),positive-int(正整数),int(整数),positive-float(正浮点数),float(浮点数)
  @Input() public readonly: boolean; //是否只读
  @Input() public unit: string; //单位
  @Input() public type: string; //类型：text(文本),password(密码)

  @Input() controlName: string;
  @Input() form: FormGroup;

  

  @Input() public ngModel: string;
  @Output() public ngModelChange = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    
  }

  onValueChange(value) {
    if(this.ngModelChange) {
      this.ngModelChange.emit(value);
    }
  }

  

}



