import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit{

  data = new Subject<any>();


  http = inject(HttpClient);

  ngOnInit(): void {
    this.getData();
  }
  getData = () => {
    this.http.get<Data[]>('https://randomuser.me/api/?results=1000&seed=contactgram&nat=us,fr,gb&exc=login,registered&noinfo')
    .subscribe(item => item.map((user)=>  String(user.name.first+" "+ user.name.last)));
  }  
  
}
