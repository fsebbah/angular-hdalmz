import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkHistoryComponent } from './about/work-history/work-history.component';
import { UsersComponent } from './users/users.component';
import { UsersResolverService } from './users-resolver.service';
import { SingleUserComponent } from './single-user/single-user.component';
import { SingleUserResolverService } from './single-user-resolver.service';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  providers: [UsersResolverService, SingleUserResolverService],
  declarations: [ AppComponent, AboutComponent, HomeComponent, WorkHistoryComponent, UsersComponent, SingleUserComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
