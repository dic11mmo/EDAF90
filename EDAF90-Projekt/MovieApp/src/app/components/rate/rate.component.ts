import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  stars = [1, 2, 3, 4, 5, 6, 7];
  rating = 0;
  hoverState = 0;

  constructor() { }

  ngOnInit(): void { }

  onStarEnter(starId: number) {
    this.hoverState = starId;
 }

 onStarLeave() {
   this.hoverState = 0;
 }

 onStarClick(starId: number) {
   this.rating = starId;
 }

}
