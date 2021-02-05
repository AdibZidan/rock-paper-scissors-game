import { showMessage } from '@actions/message.actions';
import { decrement, increment } from '@actions/score.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeComponent implements OnInit {

  public message$!: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.message$ = this.store$.select('message');
  }

  public judge(move: Move, randomHouseMove: Move): void {
    if (this.areMovesIdentical(move, randomHouseMove)) {
      this.store$.dispatch(showMessage({ message: 'Draw!' }));
    }

    if (this.isSelectedMoveStronger(move, randomHouseMove)) {
      this.store$.dispatch(showMessage({ message: 'You win!' }));
      this.store$.dispatch(increment());
    }

    if (this.isSelectedMoveWeaker(move, randomHouseMove)) {
      this.store$.dispatch(showMessage({ message: 'You lose!' }));
      this.store$.dispatch(decrement());
    }
  }

  private areMovesIdentical(move: Move, randomHouseMove: Move): boolean {
    return move.name === randomHouseMove.name;
  }

  private isSelectedMoveStronger(move: Move, randomHouseMove: Move): boolean {
    return move.strengths.includes(randomHouseMove.name);
  }

  private isSelectedMoveWeaker(move: Move, randomHouseMove: Move): boolean {
    return move.weaknesses.includes(randomHouseMove.name);
  }

}
