import { NgModule } from '@angular/core';
import { META_REDUCERS, REDUCERS } from '@helpers/app/app.module.helper';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ArenaComponent } from './components/arena/arena.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModeSelectorComponent } from './components/mode-selector/mode-selector.component';
import { SharedModule } from './shared/shared.module';
import { MoveEffects } from './shared/store/effects/move.effects';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    BattlegroundComponent,
    FooterComponent,
    HeaderComponent,
    ModeSelectorComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forRoot(REDUCERS, { metaReducers: META_REDUCERS }),
    EffectsModule.forRoot([MoveEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
