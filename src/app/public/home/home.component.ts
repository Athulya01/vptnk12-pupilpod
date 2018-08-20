import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coins: any = [];

  constructor(private commonservice: CommonService) { }

  ngOnInit() {
    this.coins = this.commonservice.getMyItems();
  }

}
