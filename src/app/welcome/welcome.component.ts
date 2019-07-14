import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  /*
  template:
  `
    <h1>Franck Sebbah Custom Template</h1>
    <style>
    h1{
      color:green;
    }
    </style>
  `
  ,
  */
  styleUrls: ['./welcome.component.css']
 /* styles:[`
  p{
    color:blue;
  }
  `]
  */
})
export class WelcomeComponent implements OnInit {
  @Input() name:string ;
  userIsLoggedIn = false;
  isLoggedInClass = 'is-logged-in';
  constructor() { 
    this.name = 'Franck';
  }



  isLoggedIn(){
    return this.userIsLoggedIn;
  }

  login(){
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }

  ngOnInit() {
    this.setUpperCase();
    console.log(this.name);
  }

  setUpperCase(){
    this.name = this.name.toUpperCase();
  }

  displayName(){
    alert(this.name);
  }

  getName(){
    return this.name;
  }
  
  updateName($event:Event){
    const element = $event.target as HTMLInputElement;
    this.name = element.value;
  }

}