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

  constructor() { 
    this.name = 'Franck';
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

  
}