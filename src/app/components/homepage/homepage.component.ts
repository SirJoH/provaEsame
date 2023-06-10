import { Component, OnInit, OnChanges, SimpleChanges, Inject, DoCheck } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, DoCheck {
  constructor(public userService: UserService,private router: Router) { }

  ngOnInit() {
    console.log('GET DATA');
    console.log(JSON.parse(this.userService.getData('isLogged')));
    if (!JSON.parse(this.userService.getData('isLogged'))) {
      this.router.navigate(['login']);
    }
  }

  ngDoCheck() {
      if (!JSON.parse(this.userService.getData('isLogged'))) {
        this.router.navigate(['login']);
      }
    }

  
}
