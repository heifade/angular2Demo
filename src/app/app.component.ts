import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit {
  ngOnInit(): void {
    
  }
  title = 'app works!';

  public onLogin($event) {
    console.log($event);
  }
}
