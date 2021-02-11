import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@animations';
import { props } from '@helpers/animations.helper';
import { MoveHelper } from '@helpers/move.helper';
import { DELAY_TIME, getExistingPropertyFromLocalStorage } from '@helpers/store.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Props } from '@interfaces/props.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeIn]
})
export class HeaderComponent implements OnInit {

  public moveNames: string[] = MoveHelper.getMoveNames();
  public score$!: Observable<string | number>;
  public props: Props = props('fades slowly in', { timing: '0.2s' });

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.score$ = this.getDelayedScoreFromLocalStorage();
  }

  private getDelayedScoreFromLocalStorage(): Observable<string | number> {
    return this.store$.select('score')
      .pipe(
        delay(DELAY_TIME),
        startWith(getExistingPropertyFromLocalStorage('score'))
      );
  }

}
