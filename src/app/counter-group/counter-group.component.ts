import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {

  counters: Counter[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void  {
    this.counters.push(new Counter(0));
  }

  sumCounts(): number {
    let total = 0;
    this.counters.forEach(counter => {
      total += counter.count
    })
   return total;
  }
}
