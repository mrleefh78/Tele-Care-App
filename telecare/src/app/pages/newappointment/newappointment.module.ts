import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewappointmentPageRoutingModule } from './newappointment-routing.module';

import { NewappointmentPage } from './newappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewappointmentPageRoutingModule
  ],
  declarations: [NewappointmentPage]
})
export class NewappointmentPageModule {}
