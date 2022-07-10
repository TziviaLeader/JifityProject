import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllApplicationsComponent } from './Components/all-applications/all-applications.component';
import { ApplicationDetailsComponent } from './Components/application-details/application-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthInterceptor } from './Services/auth.interceptor';
import { HttpService } from './Services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransTypePipe } from './Pipes/trans-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllApplicationsComponent,
    ApplicationDetailsComponent,
    NotFoundComponent,
    TransTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
