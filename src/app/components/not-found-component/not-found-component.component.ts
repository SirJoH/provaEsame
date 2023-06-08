import { Component, inject } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.scss']
})
export class NotFoundComponent {

  location = inject(Location);

  goBack=() => this.location.back();

}
