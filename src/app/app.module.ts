import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { randomHouseMoveReducer } from '@reducers/house-move.reducer';
import { modalReducer } from '@reducers/modal.reducer';
import { moveReducer } from '@reducers/move.reducer';
import { scoreReducer } from '@reducers/scrore.reducer';
import { AppComponent } from './app.component';
import { ArenaComponent } from './components/arena/arena.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    BattlegroundComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      isModalShown: modalReducer,
      move: moveReducer,
      randomHouseMove: randomHouseMoveReducer,
      score: scoreReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
