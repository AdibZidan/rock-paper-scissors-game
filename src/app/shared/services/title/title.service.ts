import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewType } from '@enums/view-type/view-type.enum';
import { BONUS, DEFAULT, ORIGINAL } from '@helpers/title/title.helper';
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

  public getUpdatedTitle$(): Observable<string> {
    return this.store$.select('mode')
      .pipe(tap((mode: string): void =>
        this.updateTitle(mode))
      );
  }

  private updateTitle(mode: string): void {
    switch (mode) {
      case ViewType.ORIGINAL:
        this.title.setTitle(ORIGINAL);
        break;

      case ViewType.BONUS:
        this.title.setTitle(BONUS);
        break;

      default:
        this.title.setTitle(DEFAULT);
        break;
    }
  }

}
