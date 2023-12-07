import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormGroup, FormControl, Validator, Validators  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userLogin(data:any){
    console.log(data);
  }
  loginForm2= new FormGroup({
    user:new FormControl("",[Validators.required]),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required,Validators.email]),
  });
  userLogin1(dataform1:any){
    console.log(dataform1);
  }
  get user(){
    return this.loginForm2.get("user");
  }
  get password(){
    return this.loginForm2.get("password");
  }
  get email(){
    return this.loginForm2.get("email");
  }
}
