import { selectRandomHouseMove } from '@actions/house-move.actions';
import { selectMove } from '@actions/move.actions';
import { Component } from '@angular/core';
import { MoveHelper } from '@helpers/move.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent {

  public moves: Move[] = MoveHelper.getMoves();

  constructor(
    private store$: Store<AppState>
  ) { }

  public selectMove(move: Move): void {
    this.store$.dispatch(selectMove(move));
    this.store$.dispatch(selectRandomHouseMove());
  }

}
