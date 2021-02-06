import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
    it('Should have an undefined move$ property', () => {
      expect(component.move$).toBeUndefined();
    });

    it('Should have an undefined randomHouseMove$ property', () => {
      expect(component.randomHouseMove$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      component.ngOnInit();
      mockStore.resetSelectors();
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
  });

});
