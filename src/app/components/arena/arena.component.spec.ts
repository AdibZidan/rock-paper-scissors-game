import { hideView, showView } from '@actions/view.actions';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewType } from '@enums/view-type/view-type.enum';
import { DELAY_TIME } from '@helpers/store/store.helper';
import { Move } from '@interfaces/move.interface';
import { initialState } from '@mocks/initial-state.mock';
import { moveMock } from '@mocks/move.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectMove, selectRandomHouseMove } from '@selectors/move.selector';
import { ArenaComponent } from './arena.component';

describe('ArenaComponent', () => {

  let component: ArenaComponent;
  let fixture: ComponentFixture<ArenaComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArenaComponent],
      imports: [BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined state$ property', () => {
      expect(component.state$).toBeUndefined();
    });

    it('Should have an undefined randomHouseMove$ property', () => {
      expect(component.randomHouseMove$).toBeUndefined();
    });

    it('Should have an undefined message$ property', () => {
      expect(component.message$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      mockStore.resetSelectors();
      component.ngOnInit();

      expect(component.state$).toBeDefined();
    });

    it('Should select the mode from the store', (doneFn: DoneFn) => {
      component.state$.subscribe((state): void => {
        expect(state.mode).toEqual('');

        doneFn();
      });
    });

    it('Should select the view from the store', (doneFn: DoneFn) => {
      component.state$.subscribe((state): void => {
        expect(state.view).toEqual({ isShown: false });

        doneFn();
      });
    });

    it('Should select the move from the store', (doneFn: DoneFn) => {
      mockStore.overrideSelector(selectMove, moveMock);

      component.state$.subscribe((state): void => {
        expect(state.move).toEqual(moveMock);

        doneFn();
      });
    });

    it('Should select the random house move from the store', fakeAsync(() => {
      mockStore.overrideSelector(selectRandomHouseMove, moveMock);

      expect(component.randomHouseMove$).toBeDefined();

      component.randomHouseMove$.subscribe((actualRandomHouseMove: Move): void => {
        expect(actualRandomHouseMove).toEqual(moveMock);
      });

      tick(DELAY_TIME);
    }));

    it('Should select the message from the store', fakeAsync(() => {
      tick(DELAY_TIME);

      expect(component.message$).toBeDefined();
    }));

    it('Should hide the arena and show another view', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch');

      component.updateView('original');

      expect(dispatchSpy.calls.first().args).toEqual([{
        viewType: ViewType.ARENA,
        type: hideView.type
      }] as any);

      expect(dispatchSpy.calls.mostRecent().args).toEqual([{
        viewType: ViewType.ORIGINAL,
        type: showView.type
      }] as any);

      expect(dispatchSpy.calls.count()).toEqual(2);
    });
  });

});
