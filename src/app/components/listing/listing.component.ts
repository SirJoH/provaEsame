import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  response = new Subject<Card[]>();
  cards: Card[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getData();
    this.response.subscribe((cardData) => {
      this.cards=cardData;
    });
    console.log("cards",this.cards);
  }
  getData = () => {
    this.http
      .get<Data[]>(
        'https://randomuser.me/api/?results=1000&seed=contactgram&nat=us,fr,gb&exc=login,registered&noinfo'
      )
      .subscribe((items) => {
        if (Array.isArray(items) && items.length > 0) {
          const cardData: Card[] = items.map((user) => ({
            title: user.name.first,
            description: user.name.last,
            srcImg: user.picture.medium,
          }));
          this.response.next(cardData);
        }
      });
  };
}
