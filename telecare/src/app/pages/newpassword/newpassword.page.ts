import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import {ToastService} from './../../services/toast.service'
import { Router } from '@angular/router';
import {AuthService} from './../../services/auth.service'


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {

  
userEmail: any;
  constructor(private route: ActivatedRoute,private router: Router,private toastService: ToastService, private authService: AuthService) { }

  ngOnInit() {
   
  }

  getResetCode(){

    this.authService.getResetCode(this.userEmail).subscribe( (res:any) => {
      if (res){
       // console.log(res);
        this.toastService.presentToast("A reset code has been sent to your email!");
        const navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(res)
          }
    };
        this.router.navigate(['reset-password'], navigationExtras);
      }
      else {
        //console.log("invalid user");
        this.toastService.presentToast("Please check your username and password");
      }
  },
  (error:any) => {
    //console.log("connection error");
    this.toastService.presentToast("User not found! Please check if you enter the correct email!");
  }
  
  )

  }

}
