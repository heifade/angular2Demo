import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterViewInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // styles: [`:host {background-color:red;display:block;}`]
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {
  ngAfterViewInit(): void {
    console.log('TestComponent.ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log(111);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() 
  public aa: string;

  constructor() { }

  ngOnInit() {
    console.log('TestComponent.ngOnInit');
  }

}
