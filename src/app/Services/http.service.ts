import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  env = environment
  constructor(public serHttp: HttpClient) { 

  }

  getApplications(): Observable<any> {
    debugger
    return this.serHttp.get<any>(this.env.BASE_URL + 'applications');
  }

  getCardsByAppId(appId:number): Observable<any> {
    return this.serHttp.get<any>(this.env.BASE_URL + 'cards/' + appId);
  }

  getTransByAppId(appId:number): Observable<any> {
    return this.serHttp.get<any>(this.env.BASE_URL + 'trans/' + appId);
  }
}
