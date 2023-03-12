import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MasterCard} from '../model/MasterCard';
@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit{
  @Input()
  card_assets!:MasterCard;

  @Output('cardClicked')
  eventEmitter = new EventEmitter<MasterCard>();

  constructor() {}

  ngOnInit() {}
  onCardClick() {
    console.log("clicked card");
    this.eventEmitter.emit(this.card_assets);
  }

}
