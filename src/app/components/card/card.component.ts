import { Component, Input, inject } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!:Card;
  userService = inject(UserService);
}
