import { Component, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/Profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!:Card;
  @Output() singleProfile!:Card;

  userService = inject(UserService);
  router = inject(Router);

  viewDetails() {
    this.userService.setCard(this.card);
  }
  onClick(item: Card){
    this.userService.setCard(item)
    this.router.navigate(['details'])
  }

  prova(profile:Card){
    this.userService.setFavorite(profile)
  }
}
