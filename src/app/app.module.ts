import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import {WelcomeService} from './admin/welcome/welcome.service';
import { PasswordMatchesDirective } from './password-matches.directive';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,AdminModule ],
  providers: [WelcomeService],
  declarations: [ AppComponent, PasswordMatchesDirective ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
