import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MainComponent } from './main/main.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [
    MainComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    CommonModule,
    
    
    RouterModule.forChild(mainRoutes)
  ],
  exports:[
  	
  ],
  providers: [
    
  ]
})
export class MainModule { }


// 3627

// 1600 
//  407 窗
// 1620 铝
