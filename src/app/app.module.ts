import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkHistoryComponent } from './about/work-history/work-history.component';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  providers: [],
  declarations: [ AppComponent, AboutComponent, HomeComponent, WorkHistoryComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
