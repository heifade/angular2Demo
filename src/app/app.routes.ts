import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';


export const appRoutes=[
	{
		path:'',
		redirectTo:'posts',
		pathMatch:'full'
	},
	{
		path:'',
		component: LoginComponent
	},
	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'main',
		loadChildren:'./pages/main/main.module#MainModule'
	}
];
