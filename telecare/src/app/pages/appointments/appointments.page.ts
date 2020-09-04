import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service'
import {AuthService} from './../../services/auth.service'
import { IonContent } from '@ionic/angular';
import {ToastService} from './../../services/toast.service'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  serviceName:string;
  userID: string;
  UserData:any;
  appointments: any;

  constructor(public api:HttpService, private authService: AuthService, private toastService: ToastService) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any) => {
      this.UserData = res;
      console.log("user", res)
      this.userID = res.ID;           
    this.serviceName="ServiceRequest?userID=" + "6";
   
    this.getAppointment(this.serviceName, res);
    });
  }

  getAppointment(currentService:string, data:any){
    console.log("serviceName: ",currentService);
    this.api.get(currentService,data)
    .subscribe(res => {
      console.log("Appointment List: ", res);
      this.appointments= res;
    }, err=> {
      console.log(err);
  
    });
  }

}
