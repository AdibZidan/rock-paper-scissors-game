import { Component, OnInit } from '@angular/core';
import { AppState } from '@interfaces/app-state.interface';
import { Move } from '@interfaces/move.interface';
import { Store } from '@ngrx/store';
import { selectMove, selectRandomHouseMove } from '@selectors/move.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  public move$!: Observable<Move>;
  public randomHouseMove$!: Observable<Move>;
  public message$!: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.move$ = this.store$.select(selectMove);
    this.randomHouseMove$ = this.store$.select(selectRandomHouseMove);
    this.message$ = this.store$.select('message');
  }

}
