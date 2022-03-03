import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-pannel',
  templateUrl: './summary-pannel.component.html',
  styleUrls: ['./summary-pannel.component.css']
})
export class SummaryPannelComponent implements OnInit {
  number: any = 0;
  constructor() {
    this.number=Math.round(Math.random()*1000);
   }

  ngOnInit(): void {
  }

}
