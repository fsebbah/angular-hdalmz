import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkHistoryComponent } from './about/work-history/work-history.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,HttpClientModule ],
  providers: [],
  declarations: [ AppComponent, AboutComponent, HomeComponent, WorkHistoryComponent, UsersComponent, SingleUserComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
