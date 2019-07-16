import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {User} from './user';

@Injectable()
export class UsersResolverService implements Resolve<User[]>{

  constructor(private http: HttpClient) { }

  resolve(){
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

}