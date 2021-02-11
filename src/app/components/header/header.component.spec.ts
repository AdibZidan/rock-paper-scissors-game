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
    it('Should have a defined moveNames property', () => {
      expect(component.moveNames).toBeDefined();
      expect(component.moveNames).toEqual([
        'Scissors', 'Spock', 'Paper', 'Lizard', 'Rock'
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
      selectSpy = spyOn(mockStore, 'select').and.callThrough();

      component.ngOnInit();
    });

    it('Should have a defined score$ property', () => {
      expect(component.score$).toBeDefined();
    });

    it('Should select the score property from the store', () => {
      expect(selectSpy).toHaveBeenCalled();
      expect(selectSpy).toHaveBeenCalledWith('score');
      expect(selectSpy).toHaveBeenCalledTimes(1);
    });
  });

});
