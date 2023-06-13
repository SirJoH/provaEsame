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
  submitted=false;
  check=false;
  formBuilder = inject(FormBuilder);
  loginForm!: FormGroup;

  location = inject(Location);



  constructor(private userService:UserService, private router:Router){

  }

  ngOnInit(): void {
    this.userService.saveData('isLogged','false');
    //SIMULO REGISTRAZIONE

    //CONTROLLO L'UNTENTE REGISTRATO
    console.log('GET USER');
    console.log(this.userService.getUser('newUser'));



    this.loginForm = this.formBuilder.group({
      email: [
        this.userService && this.userService.getUser('newUser').email ? this.userService.getUser('newUser').email : '',
        Validators.required,
      ],
      password: [
        this.userService && this.userService.getUser('newUser').password ? this.userService.getUser('newUser').password : '',
        [Validators.required],
      ],
    });
  }

  onSubmit = () => {
      this.submitted = true;

      this.check=(this.userService.getUser('newUser').email === this.loginForm.value.email &&
      this.userService.getUser('newUser').password === this.loginForm.value.password);


      if(this.check) {
        this.userService.saveData('userLogged', JSON.stringify(this.userService.getUser('newUser')));

        //ADD isLogged in LOCALSTORAGE
        this.userService.saveData('isLogged','true');

        console.log('SONO DENTRO l IF');
        console.log(JSON.stringify(this.userService.getUser('userLogged')));
        this.userService.getUser('userLogged').email=this.loginForm.value.email;
        this.userService.getUser('userLogged').password=this.loginForm.value.password;
        this.router.navigate(['home']);
      }else{
        alert('Email o Password errati');
      }


      console.log('STAMPA NEW USER')
      console.log(this.userService.getUser('newUser'));
      console.log('STAMPA USER-LOGGED')
      console.log(this.userService.getUser('userLogged'));

  };
}
