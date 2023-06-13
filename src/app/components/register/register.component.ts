import { Component, OnInit, inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userService = inject(UserService);

  ngOnInit() {
    this.userService.newUser();
  }

}
