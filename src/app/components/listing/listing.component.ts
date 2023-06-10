import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  response = new BehaviorSubject<Card[]>([]);
  data!: Data[];
  cards!: Card[];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getData();  
  }
  getData = () => {
    this.http
      .get<any>(
        'https://randomuser.me/api/?results=1000&seed=contactgram&nat=us,fr,gb&exc=login,registered&noinfo'
      )
      .subscribe((items) => {
        this.data = items.results;
        this.cards = this.data.map((item) => {
          return {
            title: item.name.first,
            description: item.name.last,
            srcImg: item.picture.medium,
          }
        });
        console.log(this.cards)
      });
  };
  
}
