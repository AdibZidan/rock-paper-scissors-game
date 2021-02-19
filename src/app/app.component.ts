import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();

  constructor(
    private titleService: TitleService
  ) { }

  public ngOnInit(): void {
    this._subscription = this.titleService.setTitle$().subscribe();
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
