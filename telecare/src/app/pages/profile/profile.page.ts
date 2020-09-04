import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public PostData = {
    UserName:'',
    UserPassword:'',
    LastName:'',
    FirstName:'',
    Phone:'',
     //DOB:''
  };
  
  constructor() { }

  ngOnInit() {
  }

}
