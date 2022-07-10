import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  env = environment

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    debugger
    // const AuthorizationKey="9874654654987654658";
    const authRequst = request.clone({
      // headers: request.headers.set('Authorization', this.env.AUTHORIZATION_KEY)
    })
    return next.handle(authRequst);
  }
}
