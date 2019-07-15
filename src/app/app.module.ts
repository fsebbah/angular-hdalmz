import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import {WelcomeService} from './admin/welcome/welcome.service';

//import { HelloComponent } from './hello.component';
//import {WelcomeComponent} from './welcome/welcome.component';
//import { LoginComponent } from './login/login.component';
//import { ColorPipe } from './welcome/color.pipe';
//import { HighlightDirective } from './welcome/highlight.directive';
//import { UnlessDirective } from './welcome/unless.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule,FormsModule,AppRoutingModule,AdminModule ],
  providers: [WelcomeService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
