import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { META_REDUCERS, REDUCERS } from '@helpers/app.module.helper';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
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
    BrowserAnimationsModule,
    StoreModule.forRoot(REDUCERS, { metaReducers: META_REDUCERS }),
    EffectsModule.forRoot([MoveEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
