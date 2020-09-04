import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {HomeGuard} from './../guards/home.guard'
import {UserDataResolver} from './../resolver/userData.resolver'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/feeds/feeds.module').then(m => m.FeedsPageModule)
      },
      {
        path: 'feeds',
        loadChildren: () => import('../pages/feeds/feeds.module').then(m => m.FeedsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'physicians',
        loadChildren: () => import('../pages/physicians/physicians.module').then(m => m.PhysiciansPageModule)
      },
      {
        path: 'appointments',
        loadChildren: () => import('../pages/appointments/appointments.module').then(m => m.AppointmentsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'newappointment',
        loadChildren: () => import('../pages/newappointment/newappointment.module').then(m => m.NewappointmentPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/feeds',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/feeds',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
