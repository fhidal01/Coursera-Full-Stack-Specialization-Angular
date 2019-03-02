import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeadersService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;'
  },
  animations: [flyInOut(), expand()]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  leaderErrMess: string;
  promotionErrMess: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leadersService: LeadersService,
    @Inject('BaseURL') private baseURL
  ) {}

  ngOnInit() {
    this.dishservice
      .getFeaturedDish()
      .subscribe(featuredDish => (this.dish = featuredDish), errmess => (this.dishErrMess = <any>errmess));
    this.promotionservice
      .getFeaturedPromotion()
      .subscribe(promo => (this.promotion = promo), errmess => (this.promotionErrMess = <any>errmess));
    this.leadersService
      .getFeaturedLeader()
      .subscribe(leader => (this.leader = leader), errmess => (this.leaderErrMess = <any>errmess));
  }
}
