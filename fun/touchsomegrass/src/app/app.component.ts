import {
  AfterContentInit,
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { initFlowbite } from 'flowbite';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  handMode = true;
  legMode = false;
  clickCount = 0;
  toggleMode(mode: 'hand' | 'leg') {
    this.clickCount++;
    if (mode === 'hand') {
      document.body.classList.add('hand-cursor');
      document.body.classList.remove('leg-cursor');
      this.handMode = true;
      this.legMode = false;
    } else {
      document.body.classList.remove('hand-cursor');
      document.body.classList.add('leg-cursor');
      this.handMode = false;
      this.legMode = true;
    }
  }

  createConfetti(event: MouseEvent): void {
    this.clickCount++;
    var duration = 10 * 100;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: any, max: any) {
      return Math.random() * (max - min) + min;
    }

    var interval: any = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }

  constructor() {
    document.addEventListener('click', this.createConfetti.bind(this));
  }

  ngOnInit() {
    document.body.classList.add('hand-cursor');
    initFlowbite();
  }
}
