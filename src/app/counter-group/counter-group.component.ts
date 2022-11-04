import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {
  counters: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void  {
    this.counters.push(0);
  }
}
