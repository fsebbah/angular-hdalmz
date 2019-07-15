import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    HeroFormComponent
  ],  
  imports: [
    CommonModule,FormsModule
  ],
  exports : [
    LoginComponent,
    WelcomeComponent,
    HeroFormComponent
  ]
})
export class AdminModule { }