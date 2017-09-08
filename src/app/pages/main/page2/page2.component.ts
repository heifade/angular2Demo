import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('page2 ngOnDestroy');
  }

  constructor() { }

  ngOnInit() {
    console.log('page2 ngOnInit');
  }

}
