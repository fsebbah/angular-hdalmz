import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import {WelcomeService} from './admin/welcome/welcome.service';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,AdminModule ],
  providers: [WelcomeService],
  declarations: [ AppComponent, ForbiddenValidatorDirective ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
