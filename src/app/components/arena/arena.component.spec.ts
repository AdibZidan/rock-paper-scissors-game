import { hideView, showView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewType } from '@enums/view-type.enum';
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
    it('Should have an undefined view$ property', () => {
      expect(component.view$).toBeUndefined();
    });

    it('Should have an undefined move$ property', () => {
      expect(component.move$).toBeUndefined();
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
      component.ngOnInit();
      mockStore.resetSelectors();
    });

    it('Should select the view from the store', () => {
      expect(component.view$).toBeDefined();
    });

    it('Should select the move from the store', (doneFn: DoneFn) => {
      mockStore.overrideSelector(selectMove, moveMock);

      expect(component.move$).toBeDefined();

      component.move$.subscribe((actualMove: Move): void => {
        expect(actualMove).toEqual(moveMock);

        doneFn();
      });
    });

    it('Should select the random house move from the store', (doneFn: DoneFn) => {
      mockStore.overrideSelector(selectRandomHouseMove, moveMock);

      expect(component.randomHouseMove$).toBeDefined();

      component.randomHouseMove$.subscribe((actualRandomHouseMove: Move): void => {
        expect(actualRandomHouseMove).toEqual(moveMock);

        doneFn();
      });
    });

    it('Should select the message from the store', () => {
      expect(component.message$).toBeDefined();
    });

    it('Should hide the arena and show the battleground', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch');

      component.updateView();

      expect(dispatchSpy.calls.first().args).toEqual([{
        viewType: ViewType.ARENA,
        type: hideView.type
      }] as any);

      expect(dispatchSpy.calls.mostRecent().args).toEqual([{
        viewType: ViewType.BATTLEGROUND,
        type: showView.type
      }] as any);

      expect(dispatchSpy.calls.count()).toEqual(2);
    });
  });

});
