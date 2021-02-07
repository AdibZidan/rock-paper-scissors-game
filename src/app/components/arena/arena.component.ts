import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { ViewType } from '@enums/view-type.enum';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectMove, selectRandomHouseMove } from '@selectors/move.selector';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
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
    this.randomHouseMove$ = this.store$.select(selectRandomHouseMove);
    this.message$ = this.store$.select('message');
  }

  public updateView(): void {
    this.store$.dispatch(hideView({ viewType: ViewType.ARENA }));
    this.store$.dispatch(showView({ viewType: ViewType.BATTLEGROUND }));
  }

}
