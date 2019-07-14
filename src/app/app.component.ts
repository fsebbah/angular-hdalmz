import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular 8';
  myName = 'David Junior';

  getName(){
      return this.myName;
  }
}
