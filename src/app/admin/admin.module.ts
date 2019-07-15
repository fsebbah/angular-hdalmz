import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { WelcomeService } from './welcome/welcome.service';


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent
  ],  
  imports: [
    CommonModule
  ],
  exports : [
    LoginComponent,
    WelcomeComponent
  ],
  providers: [WelcomeService]
})
export class AdminModule { }