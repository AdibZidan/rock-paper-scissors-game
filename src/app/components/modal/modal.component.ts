import { hideView } from '@actions/view.actions';
import { Component, OnInit } from '@angular/core';
import { ViewType } from '@enums/view-type.enum';
import { AppState } from '@interfaces/app-state.interface';
import { View } from '@interfaces/view.interface';
import { Store } from '@ngrx/store';
import { selectView } from '@selectors/view.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public view$!: Observable<View>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.view$ = this.store$.select(selectView(ViewType.MODAL));
  }

  public hideModal(): void {
    this.store$.dispatch(hideView({ viewType: ViewType.MODAL }));
  }

}
