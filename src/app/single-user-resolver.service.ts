import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class SingleUserResolverService implements Resolve<User>{

  constructor(private http: HttpClient) { }

 resolve(route: ActivatedRouteSnapshot){
   const id = route.paramMap.get('id');
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/' + id);
  }

}