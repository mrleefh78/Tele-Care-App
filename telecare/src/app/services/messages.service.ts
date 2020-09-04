import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs'
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import {catchError, tap, map}  from 'rxjs/operators'


const apiUrl = "http://healthassistapi.brightcare-assist.com/api/message?userName="
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured', error.error.message);
    } else {
      console.error(
        `Backend returned code: ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something happended');
    
  }

  private extractData(res:Response){
    let body =res;
    return body || {};
  }

  getData(username: string): Observable<any> {
    return this.http.get(apiUrl + username, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    
  }

  postData(data: any) {
    return this.http.post(apiUrl, JSON.stringify(data), httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
   

  }

}
