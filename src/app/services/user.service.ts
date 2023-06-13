import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Data } from '../models/Data';
import { Card } from '../models/Card';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedCard!: Card;

  constructor(private router: Router) { }

  setCard(profile: Card) {
    this.selectedCard = profile;
  }

  setFavorite(profile: Card) {
  const luciano = JSON.parse(this.getData('userLogged'));

  if (luciano.favorites.find((p: Card) => p.title === profile.title)) {
    const newArr: Card[] = luciano.favorites.filter((element: Card) => element.title !== profile.title);
    luciano.favorites = newArr;
    this.saveData('userLogged', JSON.stringify(luciano));
  } else {
    luciano.favorites.push(profile);
    this.saveData('userLogged', JSON.stringify(luciano));
  }

  console.log(luciano.favorites);
}


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
    const userJson = '{"email":"admin@example.com","password":"admin","name":"ADMIN","surname":"Peroni", "favorites": []}';
    this.saveData("newUser", userJson);
    console.log(this.getData('newUser'));
  }


  logout() {
    //SISTEMARE IL LOGOUT
    this.saveData('isLogged', 'false');
  }
}
