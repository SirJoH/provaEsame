import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {Location} from '@angular/common';

import { Router } from '@angular/router';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  title = 'Login';
  hide = true;
  formBuilder = inject(FormBuilder);
  loginForm!: FormGroup;

  location = inject(Location);



  constructor(private prova:UserService, private router:Router){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        this.prova && this.prova.user.email ? this.prova.user.email : '',
        Validators.required,
      ],
      password: [
        this.prova && this.prova.user.password ? this.prova.user.password : '',
        [Validators.required],
      ],
    });
  }

  onSubmit = () => {

      this.prova.isLoggedIn=(this.prova.user.email === this.loginForm.value.email &&
      this.prova.user.password === this.loginForm.value.password);
      console.log(this.prova.isLoggedIn);

      if(this.prova.isLoggedIn) {
        this.prova.userLogged.email=this.loginForm.value.email;
        this.prova.userLogged.password=this.loginForm.value.password;
        this.router.navigate(['home']);
      }
      console.log(this.prova.userLogged);
  };
}
