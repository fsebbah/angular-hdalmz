import { Component, OnInit } from '@angular/core';
import {WelcomeService} from '../welcome/welcome.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit() {
  }

  getPerson(){
    console.log(this.welcomeService.getPerson().name);
    return this.welcomeService.getPerson();
  }

}