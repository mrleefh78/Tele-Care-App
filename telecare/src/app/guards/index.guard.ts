import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from './../services/storage.service'
import { AUTHConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
 // canActivate(
  //  next: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 //   return true;
 // }

 constructor (
  private storageService: StorageService,
  private router: Router,
  ) { }

 canActivate(): Promise<boolean> {
  return new Promise (resolve => {
    this.storageService.get(AUTHConstants.AUTH).then( res => {
      if (res) {
        this.router.navigate(['home']);
        resolve(false);
       

      }
      else
      {
        resolve(true);
      
      }
    }).catch( err => {
      resolve(false);
    })
  })
}
  
}
