import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';



@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],  
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports : [
    LoginComponent,
    WelcomeComponent,
    HeroFormComponent,
    NameEditorComponent
  ]
})
export class AdminModule { }