import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { JudgeComponent } from '../judge/judge.component';
import { ArenaComponent } from './arena.component';

describe('ArenaComponent', () => {

  let component: ArenaComponent;
  let fixture: ComponentFixture<ArenaComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArenaComponent,
        JudgeComponent
      ],
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
    let selectSpy: jasmine.Spy;

    beforeEach(() => {
      selectSpy = spyOn(mockStore, 'select').and.callThrough();

      component.ngOnInit();
    });

    it('Should select the move and the randomHouseMove from the store', fakeAsync(() => {
      tick(500);

      expect(selectSpy.calls.first().args).toEqual(['move']);
      expect(selectSpy.calls.mostRecent().args).toEqual(['randomHouseMove']);
      expect(selectSpy.calls.count()).toEqual(2);
    }));
  });

});
