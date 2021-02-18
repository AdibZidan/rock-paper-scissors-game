import { setMode } from '@actions/mode.actions';
import { hideView, showView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@animations';
import { Mode } from '@enums/mode.enum';
import { ViewType } from '@enums/view-type.enum';
import { props } from '@helpers/animations.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Props } from '@interfaces/props.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.scss'],
  animations: [fadeIn]
})
export class ModeSelectorComponent implements OnInit {

  public view$!: Observable<View>;
  public props: Props = props('fades slowly in', { timing: '1s' });

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.MODE_SELECTOR));
  }

  public showOriginalView(): void {
    this.store$.dispatch(showView({ viewType: ViewType.ORIGINAL }));
    this.store$.dispatch(setMode({ mode: Mode.ORIGINAL }));
    this.hideModeSelectorView();
    this.showHeaderAndFooterViews();
  }

  public showBonusView(): void {
    this.store$.dispatch(showView({ viewType: ViewType.BONUS }));
    this.store$.dispatch(setMode({ mode: Mode.BONUS }));
    this.hideModeSelectorView();
    this.showHeaderAndFooterViews();
  }

  private hideModeSelectorView(): void {
    this.store$.dispatch(hideView({ viewType: ViewType.MODE_SELECTOR }));
  }

  private showHeaderAndFooterViews(): void {
    this.store$.dispatch(showView({ viewType: ViewType.HEADER }));
    this.store$.dispatch(showView({ viewType: ViewType.FOOTER }));
  }

}
