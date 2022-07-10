import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Application } from 'src/app/Classes/application';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.scss']
})
export class AllApplicationsComponent implements OnInit,OnDestroy {

  applicationsList:Array<Application>=[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  subscription:Subscription=new Subscription;

  constructor(public ser:HttpService,public route:Router) { }

  ngOnInit(): void {
    this.subscription= this.ser.getApplications().subscribe(d=>{
      this.applicationsList=d;
    },e=>{})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  func(row:any){
    this.route.navigate(["/applicationDetails",row.id])
  }

}
