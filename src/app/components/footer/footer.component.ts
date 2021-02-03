import { showModal } from '@actions/modal.actions';
import { Component } from '@angular/core';
import { AppState } from '@interfaces/app-state.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private store$: Store<AppState>
  ) { }

  public showModal(): void {
    this.store$.dispatch(showModal());
  }

}
