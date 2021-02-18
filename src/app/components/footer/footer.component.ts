import { resetScore } from '@actions/score.actions';
import { resetViews, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { ViewType } from '@enums/view-type.enum';
import { AppState } from '@interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public mode$!: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.mode$ = this.store$.select('mode');
  }

  public showModal(): void {
    this.store$.dispatch(showView({ viewType: ViewType.MODAL }));
  }

  public resetViewsAndScore(): void {
    this.store$.dispatch(resetViews());
    this.store$.dispatch(resetScore());
  }

}
