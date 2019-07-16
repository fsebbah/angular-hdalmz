import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  redirectURL: string;
  isLogged: boolean;
  isAdmin: boolean;

  constructor() { }

}