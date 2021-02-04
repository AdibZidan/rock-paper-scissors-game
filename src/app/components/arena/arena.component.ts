import { Component, OnInit } from '@angular/core';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  public move$!: Observable<Move>;
  public randomHouseMove$!: Observable<Move>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.move$ = this.store$.select('move');
    this.randomHouseMove$ = this.getDelayedRandomHouseMove$();
  }

  private getDelayedRandomHouseMove$(): Observable<Move> {
    return this.store$
      .select('randomHouseMove')
      .pipe(delay(500));
  }

}
