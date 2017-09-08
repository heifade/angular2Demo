import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('page1 ngOnDestroy');
  }

  constructor() { }

  ngOnInit() {
    console.log('page1 ngOnInit');
  }

}
