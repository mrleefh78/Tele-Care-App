import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import {ToastService} from './../../services/toast.service'
import {HttpService} from '../../services/http.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  serviceName:string;
  userID: string;
  UserData:any;

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

  constructor(public api:HttpService, private authService: AuthService, private toastService: ToastService) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any) => {
      this.UserData = res;
      console.log("user", res)
      this.userID = res.ID;           
    this.serviceName="user/" +  this.userID ;
   this.getData(this.serviceName, res);
    
    });
  }

  getData(currentService:string, data:any){
    console.log("serviceName: ",currentService);
    this.api.get(currentService,data)
    .subscribe(res => {
      console.log("userData: ", res);
     this.PostData.FirstName = res["FirstName"];
     this.PostData.MiddleName = res["MiddleName"];
     this.PostData.LastName = res["LastName"];
     this.PostData.Gender = res["Gender"];
     this.PostData.DOB = res["DOB"];
    }, err=> {
      console.log(err);
  
    });
  }

}
