import { Component, OnInit,Input,Renderer2 } from '@angular/core';

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
  cities = ['Paris','London','Berlin','Moscow']; 
  cars = [
    {
      color:'blue',
      name:'chevy',
      purchased : new Date()
    },
    {
      color:'red',
      name:'ford',
      purchased : new Date()
    },
    {
      color:'green',
      name:'dodge',
      purchased : new Date()
    }
  ];

  carColor:String
  constructor(private renderer: Renderer2) { 
    
  }

  addCar(){
    const newCar = {
      color:'green',
      name : 'gmc',
      purchased : new Date()
    }
    this.cars.push(newCar);
    //this.cars = [].concat(this.cars).concat(newCar);
  }

  getCities(){
    return this.cities.map(city => city.toLocaleUpperCase() );
  }

  isLoggedIn(){
    return this.userIsLoggedIn;
  }

  login(){
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }

  ngOnInit() {
    //this.setUpperCase();
    //console.log(this.name);
    const element = document.getElementById('welcome-message');
    //element.classList.add('is-logged-in');
    this.renderer.addClass(element,'is-logged-in');
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