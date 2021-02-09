import { chooseMove } from '@actions/move.actions';
import { hideView, showView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewType } from '@enums/view-type.enum';
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

  describe('Before initialization', () => {
    it('Should have an undefined view$ property', () => {
      expect(component.view$).toBeUndefined();
    });

    it('Should have a defined moves property', () => {
      expect(component.moves).toBeDefined();
    });

    it('Should have a defined props property', () => {
      expect(component.props).toEqual({
        value: 'fades slowly in',
        params: { timing: '0.5s' }
      });
    });
  });

  describe('After initialization', () => {
    let dispatchSpy: jasmine.Spy;

    beforeEach(() => {
      dispatchSpy = spyOn(mockStore, 'dispatch');

      component.ngOnInit();
    });

    it('Should have a defined views$ property', () => {
      expect(component.view$).toBeDefined();
    });

    it('Should choose a move', () => {
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

    it('Should update the view', () => {
      component.updateView();

      expect(dispatchSpy.calls.first().args).toEqual([{
        viewType: ViewType.ARENA,
        type: showView.type
      }] as any);

      expect(dispatchSpy.calls.mostRecent().args).toEqual([{
        viewType: ViewType.BATTLEGROUND,
        type: hideView.type
      }] as any);

      expect(dispatchSpy.calls.count()).toEqual(2);
    });
  });

});
