import { Component, OnInit,Input,Renderer2 } from '@angular/core';
import {WelcomeService} from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  
})
export class WelcomeComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private welcomeService: WelcomeService){
  }

  getName(){
    return this.welcomeService.getPerson();
  }

  updateName(){
    this.welcomeService.updatePersonName('Patrick');
  }
}