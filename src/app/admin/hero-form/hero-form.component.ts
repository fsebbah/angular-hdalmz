import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';
import {NgForm} from '@angular/forms';

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
  model = new Hero(21,'Dr Strange','Time Travel');

  constructor() { }

  ngOnInit() {
  }
  onSubmit(heroForm: NgForm){
    console.log(this.model);
    console.log(this.heroForm);
  }
}