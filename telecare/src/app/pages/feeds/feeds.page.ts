import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {

  displaysUserData:any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any) => {
      this.displaysUserData = res;
    })

  }

  callANumber(){
   // CallNumber.call('0063287850055',true);
    //this.callNumber.callNumber("0063283030002", true)
  //.then(res => console.log('Launched dialer!', res))
  //.catch(err => console.log('Error launching dialer', err));


    console.log('0063287850055');
      }

  myAppointment(){
        this.router.navigate(['login']);
          }
    

}
