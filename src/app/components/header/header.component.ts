import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@animations';
import { props } from '@helpers/animations/animations.helper';
import { MoveHelper } from '@helpers/move/move.helper';
import { DELAY_TIME, getExistingPropertyFromLocalStorage } from '@helpers/store/store.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Props } from '@interfaces/props.interface';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeIn]
})
export class HeaderComponent implements OnInit {

  public state$!: Observable<{ mode: string, isHeaderShown: boolean; }>;
  public bonusMoveNames: string[] = MoveHelper.getBonusMoveNames();
  public originalMoveNames: string[] = MoveHelper.getOriginalMoveNames();
  public score$!: Observable<string | number>;
  public props: Props = props('fades slowly in', { timing: '0.2s' });

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.state$ = this.getState$();
    this.score$ = this.getDelayedScoreFromLocalStorage();
  }

  private getState$(): Observable<{ mode: string, isHeaderShown: boolean; }> {
    return combineLatest([
      this.store$.select('mode'),
      this.store$.select('views')
    ]).pipe(map(([mode, views]) => ({ mode, isHeaderShown: views.header.isShown })));
  }

  private getDelayedScoreFromLocalStorage(): Observable<string | number> {
    return this.store$.select('score')
      .pipe(
        delay(DELAY_TIME),
        startWith(getExistingPropertyFromLocalStorage('score'))
      );
  }

}
