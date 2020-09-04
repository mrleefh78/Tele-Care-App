import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysiciansPage } from './physicians.page';

const routes: Routes = [
  {
    path: '',
    component: PhysiciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysiciansPageRoutingModule {}
