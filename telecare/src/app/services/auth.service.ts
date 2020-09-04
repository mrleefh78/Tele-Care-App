import { Injectable } from '@angular/core';
import {HttpService} from './http.service'
import {StorageService} from './storage.service'
import {Router} from '@angular/router'
import {Observable, BehaviorSubject} from 'rxjs'
import {AUTHConstants} from './../config/auth-constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>('');

  constructor (
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    ) { }

    getUserData(){
      this.storageService.get(AUTHConstants.AUTH).then ( res =>{
      this.userData$.next(res);
        })
    }

    login(postData:any){
      var username = postData.username;
      var password = postData.password;
      return this.httpService.get('user/validateLogin?username='+ username + '&password=' + password + '',postData);
    }

    logout(){
      //this.storageService.clear();
      this.storageService.removeItem(AUTHConstants.AUTH).then(res =>{
        this.userData$.next('');
        this.router.navigate(['']);
      });
    }

    signup(postData:any): Observable<any>{
      return this.httpService.post('user/Post',postData);

    }

    sendMessage(postData:any): Observable<any>{
      return this.httpService.post('message/Post',postData);

    }

    requestAppointment(postData:any): Observable<any>{
      return this.httpService.post('ServiceRequest/Post',postData);

    }
}
