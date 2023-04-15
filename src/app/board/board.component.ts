import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  animations: [
    trigger('flagAnimation', [
      state('hidden', style({
          clipPath: 'inset(100% 100% 0 0)',
      })),
      state('visible', style({
        clipPath: 'inset(0 0 0 0)',
      })),
      transition('hidden => visible', [
        animate('0.1s ease-out', style({
          clipPath: 'inset(60% 50% 0 0)',
        })),
        animate('0s ease-out', style({
          clipPath: 'inset(0 40% 0 0)',
        })),
        animate('0.3s ease-out', style({
          clipPath: 'inset(0 0 0 0)',
        })),
      ]),
      transition('visible => hidden', [
        animate('0.2s ease-out', style({
          clipPath: 'inset(0 40% 0 0)',
        })),
        animate('0s ease-out', style({
          clipPath: 'inset(60% 50% 0 0)',
        })),
        animate('0.2s ease-out', style({
          clipPath: 'inset(100% 100% 0 0)',
        })),
      ]),
    ])
  ]
})

export class BoardComponent {
  constructor(){}
  rows = Array.from({length: 10}, (_, i) => i);
  cols = Array.from({length: 8}, (_, i) => i);
  flags = 10

  colors = Array.from({length: 10}, (_, i) => i).map((_, row) =>
    Array.from({length: 8}, (_, i) => i).map((_, col) =>
      ({ color: (row + col) % 2 === 0 ? 'bg-custom-100' : 'bg-custom-200' })
    )
  );
  
  isFlagged = Array.from({ length: 10 }, () => Array(8).fill(false));

  whenClicked(row: number, col: number, event: MouseEvent) {
    if (event.button == 2) {
      event.preventDefault();
      if (this.flags > 0 && !(this.isFlagged[row][col])) {
        this.isFlagged[row][col] = !this.isFlagged[row][col];
        this.flags -= 1;
        return;
      }
      if (this.isFlagged[row][col]) {
        this.isFlagged[row][col] = !this.isFlagged[row][col];
        this.flags += 1;
      }
    } else if (event.button == 0) {
    }
  }
}