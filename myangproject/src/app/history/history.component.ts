import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  list;
  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.list = this.rentalService.getHistory();
  }

}