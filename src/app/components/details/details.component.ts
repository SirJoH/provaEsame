import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from 'src/app/models/Profile';
import { UserService } from 'src/app/services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  userService = inject(UserService);
  location = inject(Location);
  userLogged = JSON.parse(this.userService.getData("userLogged"))


  @Output() favoriteChanged: EventEmitter<Card> = new EventEmitter<Card>();



  // @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>();

  // update() {
  //   this.customerChange.emit(this.customer);
  // }

  goBack=() => this.location.back();

}
