import { Component, OnInit } from '@angular/core';
import { G } from '../../common/G';

@Component({
  selector: 'wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.less']
})
export class WaitComponent implements OnInit {

  public isShow: boolean;
  
  constructor() {

  }

  ngOnInit() {
    G.waitComponent = this;
  }

  show() {
    this.isShow = true;
  }

  hide() {
    this.isShow = false;
  }



}
