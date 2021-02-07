import { chooseMove } from '@actions/move.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { Rock } from '@models/rock.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ArenaComponent } from '../arena/arena.component';
import { BattlegroundComponent } from './battleground.component';

describe('BattlegroundComponent', () => {

  let component: BattlegroundComponent;
  let fixture: ComponentFixture<BattlegroundComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArenaComponent,
        BattlegroundComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlegroundComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should choose and dispatch a move', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    component.chooseMove(new Rock());

    expect(dispatchSpy.calls.first().args).toEqual([{
      name: 'Rock',
      image: '/assets/images/icon-rock.svg',
      strengths: ['Lizard', 'Scissors'],
      weaknesses: ['Spock', 'Paper'],
      type: chooseMove.type
    }] as any);

    expect(dispatchSpy.calls.count()).toEqual(1);
  });

});
