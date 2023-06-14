import { Component, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/Profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!:Profile;
  @Output() singleProfile!:Profile;

  userService = inject(UserService);
  router = inject(Router);

  // viewDetails() {
  //   this.userService.setCard(this.card);
  // }
  onClick(item: Profile){
    this.userService.setCard(item)
    this.router.navigate(['details'])
  }

  prova(profile:Profile){
    this.userService.setFavorite(profile)
  }
}
