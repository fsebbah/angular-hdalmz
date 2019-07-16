import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WorkHistoryComponent} from './about/work-history/work-history.component';

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