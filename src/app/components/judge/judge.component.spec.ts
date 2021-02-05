import { decrement, increment } from '@actions/score.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { Paper } from '@models/paper.model';
import { Rock } from '@models/rock.model';
import { Scissors } from '@models/scissors.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { JudgeComponent } from './judge.component';

describe('JudgeComponent', () => {

  let component: JudgeComponent;
  let fixture: ComponentFixture<JudgeComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [JudgeComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined message$ property', () => {
      expect(component.message$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    let selectSpy: jasmine.Spy;
    let dispatchSpy: jasmine.Spy;

    beforeEach(() => {
      selectSpy = spyOn(mockStore, 'select').and.callThrough();

      component.ngOnInit();
    });

    it('Should select the message$ property from the store', () => {
      expect(selectSpy).toHaveBeenCalled();
      expect(selectSpy).toHaveBeenCalledWith('message');
      expect(selectSpy).toHaveBeenCalledTimes(1);
    });

    it(`Should show a 'Draw!' message if the moves are identical`, () => {
      dispatchSpy = spyOn(mockStore, 'dispatch');

      component.judge(new Rock(), new Rock());

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith({
        message: 'Draw!',
        type: 'Show Message'
      });

      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });

    it(`Should show a 'You win!' message if the selected move beats the randomized house move and should also increment the score`, () => {
      dispatchSpy = spyOn(mockStore, 'dispatch');

      component.judge(new Rock(), new Scissors());

      expect(dispatchSpy.calls.first().args).toEqual([{
        message: 'You win!',
        type: 'Show Message'
      }]);

      expect(dispatchSpy.calls.mostRecent().args).toEqual([{ type: increment.type }]);
      expect(dispatchSpy.calls.count()).toEqual(2);
    });

    it(`Should show a 'You lost!' message if the randomized house move beats the selected move and should also decrement the score`, () => {
      dispatchSpy = spyOn(mockStore, 'dispatch');

      component.judge(new Rock(), new Paper());

      expect(dispatchSpy.calls.first().args).toEqual([{
        message: 'You lose!',
        type: 'Show Message'
      }]);

      expect(dispatchSpy.calls.mostRecent().args).toEqual([{ type: decrement.type }]);
      expect(dispatchSpy.calls.count()).toEqual(2);
    });
  });

});
