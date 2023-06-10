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
  formBuilder = inject(FormBuilder);
  loginForm!: FormGroup;

  location = inject(Location);



  constructor(private prova:UserService, private router:Router){

  }

  ngOnInit(): void {
    this.prova.saveData('isLogged','false');
    //SIMULO REGISTRAZIONE
    this.prova.newUser();
    //CONTROLLO L'UNTENTE REGISTRATO
    console.log('GET USER');
    console.log(this.prova.getUser('newUser'));



    this.loginForm = this.formBuilder.group({
      email: [
        this.prova && this.prova.getUser('newUser').email ? this.prova.getUser('newUser').email : '',
        Validators.required,
      ],
      password: [
        this.prova && this.prova.getUser('newUser').password ? this.prova.getUser('newUser').password : '',
        [Validators.required],
      ],
    });
  }

  onSubmit = () => {
      this.submitted = true;

      var check=(this.prova.getUser('newUser').email === this.loginForm.value.email &&
      this.prova.getUser('newUser').password === this.loginForm.value.password);


      if(check) {
        this.prova.saveData('userLogged', JSON.stringify(this.prova.getUser('newUser')));

        //ADD isLogged in LOCALSTORAGE
        this.prova.saveData('isLogged','true');
        
        console.log('SONO DENTRO l IF');
        console.log(JSON.stringify(this.prova.getUser('userLogged')));
        this.prova.getUser('userLogged').email=this.loginForm.value.email;
        this.prova.getUser('userLogged').password=this.loginForm.value.password;
        this.router.navigate(['home']);
      }

      console.log('STAMPA NEW USER')
      console.log(this.prova.getUser('newUser'));
      console.log('STAMPA USER-LOGGED')
      console.log(this.prova.getUser('userLogged'));

  };
}
