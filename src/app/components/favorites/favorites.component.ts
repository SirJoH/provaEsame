import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Location} from '@angular/common';
import { Profile } from 'src/app/models/Profile';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  userService = inject(UserService);
  location = inject(Location);
  userLogged=JSON.parse(this.userService.getData('userLogged'));
  goBack=() => this.location.back();

  prova(profile:Profile){
    this.userService.setFavorite(profile)
  }


}
