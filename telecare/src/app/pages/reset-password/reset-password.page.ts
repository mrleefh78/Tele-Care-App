import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastService} from './../../services/toast.service'
import { Router } from '@angular/router';
import {AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  UserData:any;
  public PostData = {
    UserID:'',
    newPassword:'',
    confirmPassword:'',
    resetCode:''
  };

  public PostDataEntry = {
    UserName:'',
    UserPassword:''
  };

  constructor(private route: ActivatedRoute,private router: Router,private toastService: ToastService, private authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        //store the temp in data
        this.UserData = JSON.parse(params.special);
        console.log("Parameter Code",this.UserData);
        this.PostData.UserID =this.UserData.Email;
      }
    });

    //this.UserData = this.route.queryParams.subscribe(params => {
   //   console.log("Parameter Code",params);
 //});
    //this.getUserData();
    //this.getResetCode();
  }

  getUserData(){
    this.authService.userData$.subscribe((res:any) => {
      this.UserData = res;
      console.log("current user", res)     
     
      this.PostData.UserID = res.ID;  
     
    })
  }

  getResetCode(){

    this.authService.getResetCode2(this.PostData).subscribe( (res:any) => {
      if (res){
        console.log(res);
        this.toastService.presentToast("A reset code has been sent to your email!");
      }
      else {
        //console.log("invalid user");
        this.toastService.presentToast("error sending code");
      }
  },
  (error:any) => {
    //console.log("connection error");
    this.toastService.presentToast("error sending code");
  }
  
  )

  }

  submitPassword(){

    if (this.PostData.resetCode != this.UserData.Code )
    {
      this.toastService.presentToast("Your reset code is not correct!");
    }
    else if (this.PostData.confirmPassword == "")
    {
      this.toastService.presentToast("Please enter your new password!");

    }
    else if (this.PostData.confirmPassword != this.PostData.newPassword  )
    {
      this.toastService.presentToast("Your new password do not match!");

    }
    else{
      this.resetPassword();
     
    }
   
   // console.log("New Password",this.PostData); 

  }

  resetPassword(){

    this.PostDataEntry.UserName=this.PostData.UserID;
    this.PostDataEntry.UserPassword=this.PostData.newPassword;
   
    this.authService.resetPassword(this.PostDataEntry).subscribe( (res:any) => {
      if (res) {
        console.log("password reset success",res)
        this.toastService.presentToast("Success");
        this.router.navigate(['login']);

      }
      else{

        console.log("Error", res)
      }

    });
    
  }

}


