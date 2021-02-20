import { showMessage } from '@actions/message.actions';
import { chooseMove, chooseWinner } from '@actions/move.actions';
import { decrementScore, incrementScore } from '@actions/score.actions';
import { Injectable } from '@angular/core';
import { DELAY_TIME } from '@helpers/store/store.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class MoveEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>
  ) { }

  public judge$ = createEffect((): Observable<AppState> => this.actions$.pipe(
    ofType(chooseMove.type),
    withLatestFrom(this.store$),
    switchMap(([move, appState]) => of(appState)),
    tap(({ moves }): void => this.judge(moves.move, moves.randomHouseMove))
  ), { dispatch: false });

  public determineWinner$ = createEffect((): Observable<AppState> => this.actions$.pipe(
    ofType(incrementScore.type),
    withLatestFrom(this.store$),
    switchMap(([move, appState]) => of(appState)),
    delay(DELAY_TIME),
    tap(({ moves }): void => this.store$.dispatch(chooseWinner(moves.move)))
  ), { dispatch: false });

  private judge(move: Move, randomHouseMove: Move): void {
    if (this.areMovesIdentical(move, randomHouseMove)) {
      this.store$.dispatch(showMessage({ message: 'Draw!' }));
    }

    if (this.isSelectedMoveStronger(move, randomHouseMove)) {
      this.store$.dispatch(showMessage({ message: 'You win!' }));
      this.store$.dispatch(incrementScore());
    }

    if (this.isSelectedMoveWeaker(move, randomHouseMove)) {
      this.store$.dispatch(chooseWinner(randomHouseMove));
      this.store$.dispatch(showMessage({ message: 'You lose!' }));
      this.store$.dispatch(decrementScore());
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
