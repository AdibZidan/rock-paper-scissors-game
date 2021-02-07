import { chooseMove } from '@actions/move.actions';
import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { ViewType } from '@enums/view-type.enum';
import { MoveHelper } from '@helpers/move.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  public view$!: Observable<View>;
  public moves: Move[] = MoveHelper.getMoves();

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.BATTLEGROUND));
  }

  public chooseMove(move: Move): void {
    this.store$.dispatch(chooseMove(move));
  }

  public updateView(): void {
    this.store$.dispatch(showView({ viewType: ViewType.ARENA }));
    this.store$.dispatch(hideView({ viewType: ViewType.BATTLEGROUND }));
  }

}
