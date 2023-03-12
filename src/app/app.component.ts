import { Component } from '@angular/core';
import {COURSES as CARDASSETS} from 'db-data';
import {MasterCard} from './model/MasterCard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  card_assets:any | MasterCard[] = CARDASSETS;
  cardClicked(masterCard: MasterCard){
      console.log(masterCard);
  }
}
