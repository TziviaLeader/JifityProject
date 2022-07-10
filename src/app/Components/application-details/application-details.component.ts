import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/Classes/card';
import { CardAndTarns } from 'src/app/Classes/card-and-tarns';
import { Trans } from 'src/app/Classes/trans';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit ,OnDestroy{

  subscription:Subscription=new Subscription;
  cardsList:Array<Card>=[];
  transList:Array<Trans>=[];
  cardsAndTrans:Array<CardAndTarns>=[];
  displayedColumns: string[] = ['cardNo', 'issuer', 'amount','transType'];

  constructor(public route:ActivatedRoute,public ser:HttpService) { }

  initCardsAndTrans(){
    this.transList.forEach(t => {
      let card=this.cardsList.find(c=>c.id==t.cardId)
      if(card)
      {       
        let temp=new CardAndTarns(card.cardNo,card.issuer,parseInt(t.amount),t.transType)
        this.cardsAndTrans.push(temp);
      }
      
    });
    debugger;
  }

  ngOnInit(): void {
    this.subscription=this.route.params.subscribe(param=>{
      this.ser.getCardsByAppId(param["applicationId"]).subscribe(cards=>{
        this.cardsList=cards;
        this.ser.getTransByAppId(param["applicationId"]).subscribe(trans=>{
          this.transList=trans;
          this.initCardsAndTrans();
        },error=>{})
      },err=>{});
    },e=>{})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
