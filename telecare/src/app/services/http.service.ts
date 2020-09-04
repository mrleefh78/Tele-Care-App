import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import {headersToString} from 'selenium-webdriver/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(serviceName:string, data:any){
    const headers =new HttpHeaders();
    const options = { header:headers, withCredintials:false }
    const url = environment.apiUrl + serviceName;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    console.log(data);
    return this.http.get(url);
    //return this.http.post(url, JSON.stringify(data), httpOptions);
  }

  post(serviceName:string, data:any){
    const headers =new HttpHeaders();
    const options = { header:headers, withCredintials:false }
    const url = environment.apiUrl + serviceName;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    console.log(data);
   // return this.http.get(url);
    return this.http.post(url, JSON.stringify(data), httpOptions);
  }
}
