import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service'
import {AuthService} from './../../services/auth.service'
import {StorageService} from './../../services/storage.service'
import { AUTHConstants } from 'src/app/config/auth-constants';
import {ToastService} from './../../services/toast.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public PostData = {
    username:'',
    password:''
  };

  constructor(private router: Router, 
    public api:UserService, 
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  validateInput(){
    let username = this.PostData.username.trim();
    let password =  this.PostData.password.trim();

    return (this.PostData.username && this.PostData.password && username.length > 0 && password.length > 0)
  }

  loginAction(){
   // this.router.navigate(['home']);

    if (this.validateInput())
    {
      this.authService.login(this.PostData).subscribe( (res:any) => {
          if (res){
            //console.log(res);
            this.storageService.store(AUTHConstants.AUTH, res);
            this.router.navigate(['home']);

          }
          else {
            //console.log("invalid user");
            this.toastService.presentToast("Please check your username and password");
          }
      },
      (error:any) => {
        //console.log("connection error");
        this.toastService.presentToast("Please check your username and password");
      }
      
      )

    }
    else{
     // console.log("user and password");
     this.toastService.presentToast("Enter username and password");
    }

   // console.log(this.PostData);
      }
}
