import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from 'src/app/module/user';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const user: User =
  {
    email: 'admin@example.com',
    password: 'admin',
  }


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
  isLogged = false;

  userLogged:User={
    email:undefined,
    password:undefined
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        user && user.email ? user.email : '',
        Validators.required,
      ],
      password: [
        user && user.password ? user.password : '',
        [Validators.required],
      ],
    });
  }

  onSubmit = () => {

    const isLogged=(user.email === this.loginForm.value.email &&
      user.password === this.loginForm.value.password);
      console.log(isLogged);

      if(isLogged){
        this.userLogged.email=this.loginForm.value.email;
        this.userLogged.password=this.loginForm.value.password;
      }
      console.log(this.userLogged);
  };
}
