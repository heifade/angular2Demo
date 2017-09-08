import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TextBoxComponent } from './control/text-box/text-box.component';
import { formControlErrorComponent } from './control/form-control-error/form-control-error.component';
import { ValidateMaxDirective } from './directives/validate-max/validate-max.directive';
import { PictureUploadComponent } from './control/picture-upload/picture-upload.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { TestComponent } from './control/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextBoxComponent,
    formControlErrorComponent,
    ValidateMaxDirective,
    PictureUploadComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
