import { hideModal } from '@actions/modal.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '@interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public isModalShown$!: Observable<boolean>;

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.isModalShown$ = this.store$.select('isModalShown');
  }

  public hideModal(): void {
    this.store$.dispatch(hideModal());
  }

}
