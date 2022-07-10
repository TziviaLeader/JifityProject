import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../Classes/application';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  env = environment
  private application$:Subject<Application>=new Subject();
  
  public getApplication$() : Observable<Application> {
    debugger
    return this.application$.asObservable();
  }
  public seApplication$(app : Application) {
    debugger
    this.application$.next(app);
  }
  

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
