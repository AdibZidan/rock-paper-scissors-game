import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BattlegroundComponent,
        FooterComponent,
        HeaderComponent,
        ModalComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

});
