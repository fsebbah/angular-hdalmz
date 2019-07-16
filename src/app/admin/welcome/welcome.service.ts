import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' // Importation dans app.module. Sinon on désactive pour import dans admin.module
})

export class WelcomeService {

  private person = {
    name:'Franck',
    age: 55,
    gender: 'male'
  }

  constructor() { }

  public getPerson(){
    return this.person;
  }

  public updatePersonName(name: string){
    this.person.name = name;
  }

}