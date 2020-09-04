import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service'
import {AuthService} from './../../services/auth.service'
import {ToastService} from './../../services/toast.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public PostData = {
    UserName:'',
    UserPassword:'',
    LastName:'',
    FirstName:'',
    MiddleName:'',
    Gender:'',
    Phone:'',
     DOB:''
  };

  constructor(private router: Router, public api:UserService, private authService: AuthService, private toastService: ToastService) { }

  ngOnInit() {
  }
  navigateLoginPage(){
    this.router.navigate(['login']);
      }

  signUp(){
        console.log(this.PostData);
      }
      
      signUpAction(){

        if (this.validateInput()){

          this.authService.signup(this.PostData).subscribe( (res:any) => {
            if (res) {
              console.log("signup success",res)
              this.router.navigate(['login']);
  
            }
            else{
  
              console.log("Error", res)
            }
  
          },
          
            (error:any) => {
              console.log("error server", error.error);
              this.toastService.presentToast("Error creating your account! Please check email is already registered!");
            }
          
          
          )

        }
        else{
          this.toastService.presentToast("Please enter your First Name, Last Name, Email and Password");
        }
        
       
    }

    validateInput(){
      let username = this.PostData.UserName.trim();
      let password =  this.PostData.UserPassword.trim();
      let lastname = this.PostData.LastName.trim();
      let firstname =  this.PostData.FirstName.trim();
  
      return (this.PostData.UserName && this.PostData.UserPassword && username.length > 0 && password.length > 0 
        && this.PostData.LastName && this.PostData.LastName && lastname.length > 0 && firstname.length > 0)
    }
      
  }
  


