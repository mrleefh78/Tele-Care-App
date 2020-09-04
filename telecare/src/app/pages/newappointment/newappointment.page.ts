import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastService} from './../../services/toast.service'
import { Router } from '@angular/router';
import {AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.page.html',
  styleUrls: ['./newappointment.page.scss'],
})
export class NewappointmentPage implements OnInit {

  physician: any;
  physicianName: string;
  UserData:any;
  public PostData = {
    UserID:'',
    PhysicianID:'',
    PreferDate:'',
    Notes:''
  };

  constructor(private route: ActivatedRoute,private router: Router,private toastService: ToastService, private authService: AuthService) { }

  ngOnInit() {
    this.getUserData();
    this.route.params.subscribe(params => {
    this.physician = params; 
    //this.physicianName =params['selectedPhysician'].FirstName + " " + params['selectedPhysician'].LastName;
    console.log("The Physician", this.physician);

 });
  }

  getUserData(){
    this.authService.userData$.subscribe((res:any) => {
      this.UserData = res;
      console.log("current user", res)     
     
      this.PostData.UserID = res.ID;
    
     
    })
  }

  newAppointment(){
    this.toastService.presentToast("Your appointment request has been submitted!");
    this.PostData.PhysicianID = this.physician.ID;
    console.log("Appointment Request",this.PostData);

    this.authService.requestAppointment(this.PostData).subscribe( (res:any) => {
      if (res) {
        console.log("request success",res)
        this.router.navigate(['home']);

      }
      else{

        console.log("Error", res)
      }

    },
    
      (error:any) => {
        console.log("error server", error.error);
        this.toastService.presentToast("Error sending request! Please try again!");
      }
    
    
    )  

  }

}
