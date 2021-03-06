import { chooseMove } from '@actions/move.actions';
import { hideView, showView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewType } from '@enums/view-type/view-type.enum';
import { initialState } from '@mocks/initial-state.mock';
import { Rock } from '@models/rock.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BonusComponent } from './bonus.component';

describe('BonusComponent', () => {

  let component: BonusComponent;
  let fixture: ComponentFixture<BonusComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BonusComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusComponent);
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

    it('Should have a defined bonusMoves property', () => {
      expect(component.bonusMoves).toBeDefined();
    });

    it('Should have a defined props property', () => {
      expect(component.props).toEqual({
        value: 'fades slowly in',
        params: { timing: '0.2s' }
      });
    });
  });

  describe('After initialization', () => {
    let dispatchSpy: jasmine.Spy;

    beforeEach(() => {
      dispatchSpy = spyOn(mockStore, 'dispatch');

      component.ngOnInit();
    });

    it('Should have a defined view$ property', () => {
      expect(component.view$).toBeDefined();
    });

    it('Should choose a move', () => {
      component.chooseMove(new Rock());

      expect(dispatchSpy.calls.first().args).toEqual([{
        move: new Rock(),
        mode: ViewType.BONUS,
        type: chooseMove.type
      }]);

      expect(dispatchSpy.calls.count()).toEqual(1);
    });

    it('Should update the view', () => {
      component.updateView();

      expect(dispatchSpy.calls.first().args).toEqual([{
        viewType: ViewType.ARENA,
        type: showView.type
      }] as any);

      expect(dispatchSpy.calls.mostRecent().args).toEqual([{
        viewType: ViewType.BONUS,
        type: hideView.type
      }] as any);

      expect(dispatchSpy.calls.count()).toEqual(2);
    });

    it('Should track the moves by their index', () => {
      const indexes: number[] = [0, 1, 2, 3, 4, 5];

      indexes.forEach((index: number): void => {
        expect(component.trackByFn(index, new Rock())).toEqual(index);
      });
    });
  });

});
