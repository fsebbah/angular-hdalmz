import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = [
    'Super Strenght',
    'Invisibility',
    'Time Travel',
    'Super Speed'
  ];
  model = new Hero();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.model);
  }
}