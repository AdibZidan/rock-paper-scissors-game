import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { messageReducer } from '@reducers/message.reducer';
import { moveReducer } from '@reducers/move.reducer';
import { scoreReducer } from '@reducers/score.reducer';
import { viewReducer } from '@reducers/view.reducer';
import { AppComponent } from './app.component';
import { ArenaComponent } from './components/arena/arena.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { MoveEffects } from './shared/store/effects/move.effects';

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
      views: viewReducer,
      moves: moveReducer,
      score: scoreReducer,
      message: messageReducer
    }),
    EffectsModule.forRoot([MoveEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
