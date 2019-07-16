import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular 8';
  id = 5;

constructor(private router:Router){

}
routeToAbout(){
  this.router.navigate(['/about',this.id],{queryParams:{name:'franck'}});
  //this.router.navigate(['/about',this.id]);
}

}
