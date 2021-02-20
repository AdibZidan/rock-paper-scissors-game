import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { fadeIn, popUp } from '@animations';
import { ViewType } from '@enums/view-type/view-type.enum';
import { DELAY_TIME } from '@helpers/store/store.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectMove, selectRandomHouseMove } from '@selectors/move.selector';
import { selectView } from '@selectors/view.selector';
import { combineLatest, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
  animations: [popUp, fadeIn]
})
export class ArenaComponent implements OnInit {

  public state$!: Observable<{ mode: string, view: View, move: Move; }>;
  public randomHouseMove$!: Observable<Move>;
  public message$!: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.state$ = this.getState$();
    this.randomHouseMove$ = this.store$.select(selectRandomHouseMove).pipe(delay(DELAY_TIME));
    this.message$ = this.store$.select('message').pipe(delay(DELAY_TIME));
  }

  public updateView(viewType: any): void {
    this.store$.dispatch(hideView({ viewType: ViewType.ARENA }));
    this.store$.dispatch(showView({ viewType }));
  }

  private getState$(): Observable<{ mode: string, view: View, move: Move; }> {
    return combineLatest([
      this.store$.select('mode'),
      this.store$.select(selectView(ViewType.ARENA)),
      this.store$.select(selectMove)
    ]).pipe(map(([mode, view, move]) => ({ mode, view, move })));
  }

}
