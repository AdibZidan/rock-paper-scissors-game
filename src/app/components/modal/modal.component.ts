import { hideView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from '@animations';
import { ViewType } from '@enums/view-type.enum';
import { props } from '@helpers/animations.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Props } from '@interfaces/props.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class ModalComponent implements OnInit {

  public view$!: Observable<View>;
  public mode$!: Observable<string>;
  public props: Props = props('fades slowly in', { timing: '0.5s' });

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.MODAL));
    this.mode$ = this.store$.select('mode');
  }

  public hideModal(): void {
    this.store$.dispatch(hideView({ viewType: ViewType.MODAL }));
  }

}
