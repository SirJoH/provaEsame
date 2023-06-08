import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User =
  {
    email: 'admin@example.com',
    password: 'admin',
    name: "LucianoSergio",
    surname: "AmantiaMusumeci"
  }

  userLogged:User={
    email:undefined,
    password:undefined,
    name: undefined,
    surname: undefined
  }

  isLoggedIn: boolean = false
  
  constructor() { }
}
