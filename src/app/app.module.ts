import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ColorPipe } from './welcome/color.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule,FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,WelcomeComponent, LoginComponent, ColorPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
