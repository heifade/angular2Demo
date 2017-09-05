import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TextBoxComponent } from './components/control/text-box/text-box.component';
import { formControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { ValidateMaxDirective } from './directives/validate-max/validate-max.directive';
import { PictureUploadComponent } from './components/control/picture-upload/picture-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextBoxComponent,
    formControlErrorComponent,
    ValidateMaxDirective,
    PictureUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
