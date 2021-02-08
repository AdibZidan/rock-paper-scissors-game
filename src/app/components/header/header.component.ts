import { Component, OnInit } from '@angular/core';
import { MoveHelper } from '@helpers/move.helper';
import { DELAY_TIME } from '@helpers/store.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public moveNames: string[] = MoveHelper.getMoveNames();
  public score$!: Observable<number>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.score$ = this.store$.select('score').pipe(delay(DELAY_TIME), startWith(0));
  }

}
