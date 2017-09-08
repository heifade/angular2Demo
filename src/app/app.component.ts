import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit {
  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }

  public onLogin($event) {
    console.log($event);
  }
}
