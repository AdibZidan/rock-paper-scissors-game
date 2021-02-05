import { selectRandomHouseMove } from '@actions/house-move.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { Rock } from '@models/rock.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BattlegroundComponent } from './battleground.component';

describe('BattlegroundComponent', () => {

  let component: BattlegroundComponent;
  let fixture: ComponentFixture<BattlegroundComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BattlegroundComponent],
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

  it('Should select and dispatch a move and a randomHouseMove', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    component.selectMove(new Rock());

    expect(dispatchSpy.calls.first().args).toEqual([{
      name: 'Rock',
      image: '/assets/images/icon-rock.svg',
      strengths: ['Lizard', 'Scissors'],
      weaknesses: ['Spock', 'Paper'],
      type: 'Select a Move'
    }] as any);

    expect(dispatchSpy.calls.mostRecent().args).toEqual([{
      type: selectRandomHouseMove.type
    }]);

    expect(dispatchSpy.calls.count()).toEqual(2);
  });

});
