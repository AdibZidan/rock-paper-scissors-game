import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initialState } from '@mocks/initial-state.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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

    it('Should have a defined bonusMoveNames property', () => {
      expect(component.bonusMoveNames).toBeDefined();
      expect(component.bonusMoveNames).toEqual([
        'Scissors', 'Spock', 'Paper', 'Lizard', 'Rock'
      ]);
    });

    it('Should have a defined originalMoveNames property', () => {
      expect(component.originalMoveNames).toBeDefined();
      expect(component.originalMoveNames).toEqual([
        'Scissors', 'Paper', 'Rock'
      ]);
    });

    it('Should have an undefined score$ property', () => {
      expect(component.score$).toBeUndefined();
    });

    it('Should have a defined props property', () => {
      expect(component.props).toEqual({
        value: 'fades slowly in',
        params: { timing: '0.2s' }
      });
    });
  });

  describe('After initialization', () => {
    let selectSpy: jasmine.Spy;

    beforeEach(() => {
      selectSpy = spyOn(
        mockStore,
        'select'
      ).and.callThrough();

      component.ngOnInit();
    });

    it('Should select the mode, score and views properties from the store', () => {
      expect(component.state$).toBeDefined();
      expect(component.score$).toBeDefined();
      expect(selectSpy.calls.first().args).toEqual(['mode']);
      expect(selectSpy.calls.all()[1].args).toEqual(['views']);
      expect(selectSpy.calls.mostRecent().args).toEqual(['score']);

      expect(selectSpy.calls.count()).toEqual(3);
    });
  });

});
