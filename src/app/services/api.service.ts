import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { RecentDetectionParams } from '../model/recent-detection-params';

@Injectable()
export class ApiService {
  public token: string;
  private baseUrl:string = 'https://api.cogniac.io/1';
  private creds:string = 'am9yZGFuK2NoYWxsZW5nZUBjb2duaWFjLmNvOlBhc3M0dGVzdA==';
  username : string = 'username';
  password : string = 'password';
  tenant_id : string = '';
//  headers:any = new Headers();
 // params = new URLSearchParams();
//  options:RequestOptions;
  constructor(private http: Http) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
  }
  

  getAccessToken(username?: string, password?: string): Observable<boolean> {
    let headers:any = new Headers();
    headers.append("Authorization", `Basic ${this.creds}` ); 
    let options = new RequestOptions({ headers: headers});

      return this.http.get(`${this.baseUrl}/oauth/token?tenant_id=ypsorvbf8bjg`, options)
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              let token = response.json() && response.json().access_token;
              if (token) {
                  // set token property
                  this.token = token;

                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('access_token', this.token);

                  // return true to indicate successful login
                  return true;
              } else {
                  // return false to indicate failed login
                  return false;
              }
          });
  }

  getRecentDetections(url?:string,recentDetectionParams?:RecentDetectionParams) : Observable<any>{
     //curl https://api.cogniac.io/1/applications/Aghzb6IQ/detections
     recentDetectionParams = (recentDetectionParams==undefined)?new RecentDetectionParams():recentDetectionParams;
     let headers:any = new Headers();
     headers.append("Authorization", `Bearer ${localStorage.getItem('access_token')}` );
     let params = new URLSearchParams();
     let options = null;

     let finalurl = "";
     if (url && url!='') {
       finalurl = url;
       options = new RequestOptions({ headers: headers});
     } else {
       finalurl =`${this.baseUrl}/applications/Aghzb6IQ/detections`
        options = new RequestOptions({ headers: headers, params:recentDetectionParams});
     }

     //-H "Authorization: Bearer {access_token}"

 
     return this.http.get(finalurl, options)
            .map((response:Response)=>{
              return response.json();
            });
  }
}
