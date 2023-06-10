import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // user: User =
  // {
  //   email: 'admin@example.com',
  //   password: 'admin',
  //   name: "ADMIN",
  //   surname: "AmantiaMusumeci"
  // }

  // userLogged:User={
  //   email:undefined,
  //   password:undefined,
  //   name: undefined,
  //   surname: undefined
  // }




  
  
  constructor(private router: Router) { }

  

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    return localStorage.getItem(key) || '';
  }

  getUser(key: string) {
    const sergio = JSON.parse(this.getData(key));
    return sergio;
  }


  removeData(key: string) {
    localStorage.removeItem(key);

  }

  clearData() {
    localStorage.clear();
  }

  newUser() {
    const userJson = '{"email":"admin@example.com","password":"admin","name":"ADMIN","surname":"Peroni"}';
    this.saveData("newUser", userJson);
    console.log(this.getData('newUser'));
  }


  logout(){
    //SISTEMARE IL LOGOUT
    this.saveData('isLogged','false');



  }
}
