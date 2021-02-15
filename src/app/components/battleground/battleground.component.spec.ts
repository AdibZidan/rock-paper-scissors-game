import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { provideMockStore } from '@ngrx/store/testing';
import { BonusComponent } from 'src/app/shared/components/bonus/bonus.component';
import { OriginalComponent } from 'src/app/shared/components/original/original.component';
import { ArenaComponent } from '../arena/arena.component';
import { BattlegroundComponent } from './battleground.component';

describe('BattlegroundComponent', () => {

  let component: BattlegroundComponent;
  let fixture: ComponentFixture<BattlegroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BonusComponent,
        OriginalComponent,
        ArenaComponent,
        BattlegroundComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlegroundComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

});
