import { Component, OnInit } from '@angular/core';
import {PhysicianAPIService} from '../../services/physician-api.service'
import {Platform} from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.page.html',
  styleUrls: ['./physicians.page.scss'],
})
export class PhysiciansPage implements OnInit {
physicians: any;
filterPhysicians: any;
  constructor(
    public api:PhysicianAPIService,
    private router: Router
  ) { }

  ngOnInit() {
   // console.log("Test physician call");
    this.getData();
  }

  async getData(){
    await this.api.getData()
    .subscribe(res => {
      console.log(res);
      this.physicians = res;
      this.filterPhysicians= res;
      console.log("Physician List: " + this.physicians);
    }, err=> {
      console.log(err);
  
    });
  }

  filterPhysician(ev:any)
  {
    //this.physicians =this.physicians;
    const val = ev.target.value;
    if (val && val.trim() !="")
    {
    
      this.physicians =this.filterPhysicians.filter((item) => {
        return ((item.LastName.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
        (item.FirstName.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
        (item.Specialty.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })

      //console.log(this.physicians);
    }
    
  }

  selectPhysician(selectedPhysician: any)
  {
    //console.log("selectedPhysician: ", selectedPhysician);
    this.router.navigate(['/home/newappointment', selectedPhysician]);

  }

}
