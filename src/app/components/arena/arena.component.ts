import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { fadeIn, popUp } from '@animations';
import { ViewType } from '@enums/view-type.enum';
import { DELAY_TIME } from '@helpers/store.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectMove, selectRandomHouseMove } from '@selectors/move.selector';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
  animations: [popUp, fadeIn]
})
export class ArenaComponent implements OnInit {

  public view$!: Observable<View>;
  public move$!: Observable<Move>;
  public randomHouseMove$!: Observable<Move>;
  public message$!: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.ARENA));
    this.move$ = this.store$.select(selectMove);
    this.randomHouseMove$ = this.store$.select(selectRandomHouseMove).pipe(delay(DELAY_TIME));
    this.message$ = this.store$.select('message').pipe(delay(DELAY_TIME));
  }

  public updateView(): void {
    this.store$.dispatch(hideView({ viewType: ViewType.ARENA }));
    this.store$.dispatch(showView({ viewType: ViewType.BATTLEGROUND }));
  }

}
