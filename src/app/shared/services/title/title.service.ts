import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Mode } from '@enums/mode.enum';
import { BONUS, DEFAULT, ORIGINAL } from '@helpers/title.helper';
import { AppState } from '@interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private store$: Store<AppState>,
    private title: Title
  ) { }

  public setTitle$(): Observable<string> {
    return this.store$.select('mode')
      .pipe(tap((mode: string): void =>
        this.updateTitle(mode))
      );
  }

  private updateTitle(mode: string): void {
    switch (mode) {
      case Mode.ORIGINAL:
        this.title.setTitle(ORIGINAL);
        break;

      case Mode.BONUS:
        this.title.setTitle(BONUS);
        break;

      default:
        this.title.setTitle(DEFAULT);
        break;
    }
  }

}
