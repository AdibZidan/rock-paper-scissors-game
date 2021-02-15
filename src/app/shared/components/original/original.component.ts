import { chooseMove } from '@actions/move.actions';
import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@animations';
import { ViewType } from '@enums/view-type.enum';
import { props } from '@helpers/animations.helper';
import { MoveHelper } from '@helpers/move.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Mode } from '@interfaces/mode.interface';
import { Move } from '@interfaces/move.interface';
import { Props } from '@interfaces/props.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.scss'],
  animations: [fadeIn]
})
export class OriginalComponent implements OnInit, Mode {

  public view$!: Observable<View>;
  public originalMoves: Move[] = MoveHelper.getOriginalMoves();
  public props: Props = props('fades slowly in', { timing: '0.2s' });

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.ORIGINAL));
  }

  public chooseMove(move: Move): void {
    this.store$.dispatch(chooseMove(move));
  }

  public updateView(): void {
    this.store$.dispatch(showView({ viewType: ViewType.ARENA }));
    this.store$.dispatch(hideView({ viewType: ViewType.ORIGINAL }));
  }

  public trackByFn(index: number, move: Move): number {
    return index;
  }

}
