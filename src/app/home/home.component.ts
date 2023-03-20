import { Component } from '@angular/core';
import { MasterCard } from '../model/MasterCard';
import {COURSES as CARDASSETS} from 'db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  card_assets:any | MasterCard[] = CARDASSETS;
  cardClicked(masterCard: MasterCard){
      console.log(masterCard);
  }
}
