import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { ViewType } from '@enums/view-type.enum';
import { AppState } from '@interfaces/app-state.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.scss']
})
export class ModeSelectorComponent implements OnInit {

  public view$!: Observable<View>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.MODE_SELECTOR));
  }

  public showOriginalView(): void {
    this.hideModeSelectorView();
    this.store$.dispatch(showView({ viewType: ViewType.ORIGINAL }));
  }

  public showBonusView(): void {
    this.hideModeSelectorView();
    this.store$.dispatch(showView({ viewType: ViewType.BONUS }));
  }

  private hideModeSelectorView(): void {
    this.store$.dispatch(hideView({ viewType: ViewType.MODE_SELECTOR }));
  }

}
