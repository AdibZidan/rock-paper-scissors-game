import { setMode } from '@actions/mode.actions';
import { hideView, showView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Mode } from '@enums/mode.enum';
import { ViewType } from '@enums/view-type.enum';
import { initialState } from '@mocks/initial-state.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ModeSelectorComponent } from './mode-selector.component';

describe('ModeSelectorComponent', () => {

  let component: ModeSelectorComponent;
  let fixture: ComponentFixture<ModeSelectorComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModeSelectorComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSelectorComponent);
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

    it('Should have a defined props property', () => {
      expect(component.props).toEqual({
        value: 'fades slowly in',
        params: { timing: '1s' }
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

    it('Should show the original mode view', () => {
      component.showOriginalView();

      expect(dispatchSpy.calls.first().args).toEqual([{
        viewType: ViewType.ORIGINAL,
        type: showView.type
      }]);
      expect(dispatchSpy.calls.all()[1].args).toEqual([{
        mode: Mode.ORIGINAL,
        type: setMode.type
      }]);
      expect(dispatchSpy.calls.all()[2].args).toEqual([{
        viewType: ViewType.MODE_SELECTOR,
        type: hideView.type
      }]);
      expect(dispatchSpy.calls.all()[3].args).toEqual([{
        viewType: ViewType.HEADER,
        type: showView.type
      }]);
      expect(dispatchSpy.calls.all()[4].args).toEqual([{
        viewType: ViewType.FOOTER,
        type: showView.type
      }]);
      expect(dispatchSpy).toHaveBeenCalledTimes(5);
    });

    it('Should show the bonus mode view', () => {
      component.showBonusView();

      expect(dispatchSpy.calls.first().args).toEqual([{
        viewType: ViewType.BONUS,
        type: showView.type
      }]);
      expect(dispatchSpy.calls.all()[1].args).toEqual([{
        mode: Mode.BONUS,
        type: setMode.type
      }]);
      expect(dispatchSpy.calls.all()[2].args).toEqual([{
        viewType: ViewType.MODE_SELECTOR,
        type: hideView.type
      }]);
      expect(dispatchSpy.calls.all()[3].args).toEqual([{
        viewType: ViewType.HEADER,
        type: showView.type
      }]);
      expect(dispatchSpy.calls.all()[4].args).toEqual([{
        viewType: ViewType.FOOTER,
        type: showView.type
      }]);
      expect(dispatchSpy).toHaveBeenCalledTimes(5);
    });
  });

});
