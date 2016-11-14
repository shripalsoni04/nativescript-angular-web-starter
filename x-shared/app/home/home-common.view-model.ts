import { Injectable } from '@angular/core';

@Injectable()
export class HomeCommonViewModel {
  constructor() {}

  counter: number = 16;

  get message(): string {
    if (this.counter > 0) {
      return this.counter + " taps left";
    } else {
      return "Hoorraaay! \nYou are ready to start building!";
    }
  }

  onTap() {
    this.counter--;
  }
}
