import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ForbiddenValidatorDirective } from '../forbidden-validator.directive';
import { PasswordMatchesDirective } from '../password-matches.directive';
@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ForbiddenValidatorDirective,
    PasswordMatchesDirective
  ],  
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports : [
    LoginComponent,
    WelcomeComponent,
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ]
})
export class AdminModule { }