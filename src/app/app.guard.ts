import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AppService} from './app.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private appService: AppService,
    private router : Router
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const url = state.url;

    return this.checkLogin(url);
  }
  private checkLogin(url: string): boolean {
    if( this.appService.isLogged) return true;
    this.appService.redirectURL = url;
    this.router.navigate(['/login']);
  }
}
