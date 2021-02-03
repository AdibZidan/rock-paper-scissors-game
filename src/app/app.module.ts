import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { modalReducer } from './shared/store/reducers/modal.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BattlegroundComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      isModalShown: modalReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
