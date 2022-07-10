import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from './Classes/application';
import { HttpService } from './Services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'jifityProject';


  constructor(public route:Router){}

  ngOnInit() {
 //   this.route.navigate(["/applicationsList"])


  }

}
