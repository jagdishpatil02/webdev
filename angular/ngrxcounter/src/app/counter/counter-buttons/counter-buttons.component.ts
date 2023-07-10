import { Component, OnInit } from '@angular/core';
import { decrement, increment, reset } from '../state/counter.action';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {}
}
