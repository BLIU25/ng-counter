import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  // count: number = 0;
  @Input() counter: Counter = new Counter(0);

  constructor() { }

  ngOnInit(): void {
  }

  increase(): void{
    this.counter.count = this.counter.count + 1;
  }
  
  decrease(): void{
    this.counter.count = this.counter.count - 1;
  }
  
  rest(): void{
    this.counter.count = 0;
  }

  isLargeOrEqualThanZero(): boolean {
    return this.counter.count >= 0;
  }

  isLessOrEqualThanTen(): boolean {
    return this.counter.count <= 10;
  }
}
