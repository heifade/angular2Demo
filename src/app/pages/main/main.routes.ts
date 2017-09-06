import { MainComponent } from './main/main.component';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';



export const mainRoutes = [
  {
		path:'',
		component: MainComponent,
		// canActivate: [AuthGuard],
	  children: [
			{ path: '', component: Page1Component },
			{ path: 'page1', component: Page1Component },
			{ path: 'page2', component: Page2Component },
	  ]
	}
];