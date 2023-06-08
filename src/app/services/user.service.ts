import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User =
  {
    email: 'admin@example.com',
    password: 'admin',
    name: "ADMIN",
    surname: "AmantiaMusumeci"
  }

  userLogged:User={
    email:undefined,
    password:undefined,
    name: undefined,
    surname: undefined
  }

  isLoggedIn: boolean = false
  
  constructor(private router: Router) { }

  logout(){
    console.log(this.isLoggedIn);
    this.isLoggedIn=false
    console.log(this.isLoggedIn);
    this.userLogged.email=undefined;
    this.userLogged.password=undefined;
    this.router.navigate(['login']);
  }
}
