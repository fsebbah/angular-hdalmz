import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WorkHistoryComponent} from './about/work-history/work-history.component';
import {UsersComponent} from './users/users.component';
import {SingleUserComponent} from './single-user/single-user.component';
import {UsersResolverService} from './users-resolver.service';
import {SingleUserResolverService} from './single-user-resolver.service';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about/:id',
    component: AboutComponent,
    children:[
      {
        path:'work-history',
        component: WorkHistoryComponent
      }

    ]
  },
  {
    path:'users',
    component: UsersComponent,
    resolve: {users: UsersResolverService}
  },
  {
    path:'users/:id',
    component: SingleUserComponent,
    resolve: { user: SingleUserResolverService}
  }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }