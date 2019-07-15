import { Injectable } from '@angular/core';

@Injectable(
    providedIn: 'root' // Importation dans app.module. Sinon on désactive pour import dans admin.module
}

)
export class WelcomeService {

  constructor() { }

}