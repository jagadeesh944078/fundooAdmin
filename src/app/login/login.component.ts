import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from "../service/http.service";
import { Router } from "@angular/router";
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getErrorMessageserver='';
  constructor(private httpservice:HttpService,public router:Router) { }

  ngOnInit() {
  }//email validation
   email=new FormControl('',[Validators.required,Validators.email]);
   //password validation
   password=new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15),]); 
  
  emailError(){
    return this.email.hasError('email') ?'not a valid address':
    this.email.hasError('required') ? 'plz enter the email id ':
    ''
  }
  passwordError(){
    return this.password.hasError('required')?'not a valid password':
    this.password.hasError('minlength')?'required min 3 characters':
    this.password.hasError('maxlength')?'required max 15 characters':
    ''
  }
  submit() {
    try {
      if (this.email.value == '' || this.password.value == '') {

        this.getErrorMessageserver = "Field required";
        return;
      } else if (this.email.hasError('required') || this.email.hasError('email') || this.password.hasError('password') || this.password.hasError('minlength') || this.password.hasError('maxlength')) {
        return;
      } else {
       
       
        $.ajax({
          dataType: "json",
          url: "http://34.213.106.173/api/user/login",
          type:"post",
          data: JSON.stringify({
            "email":this.email.value,
            "password":this.password.value
          }),
          contentType: 'application/json; charset=utf-8',
          success: (data:any)=>{
            localStorage.setItem('admintoken', data['id']);
            
            this.router.navigate(['dashboard'])
          },
        
          });

       
      }
    } catch (err) {
      console.log("error in login");
    }
  }
}