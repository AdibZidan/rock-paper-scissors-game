import { resetMode } from '@actions/mode.actions';
import { resetScore } from '@actions/score.actions';
import { resetViews, showView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewType } from '@enums/view-type/view-type.enum';
import { initialState } from '@mocks/initial-state.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ModalComponent } from '../modal/modal.component';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        ModalComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    let dispatchSpy: jasmine.Spy;

    beforeEach(() => {
      dispatchSpy = spyOn(mockStore, 'dispatch');

      component.ngOnInit();
    });

    it('Should have a defined mode$ property', () => {
      expect(component.mode$).toBeDefined();
    });

    it('Should show the modal', () => {
      component.showModal();

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith({
        viewType: ViewType.MODAL,
        type: showView.type
      });
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });

    it('Should reset the views, score and mode states', () => {
      component.reset();

      expect(dispatchSpy.calls.first().args).toEqual([{
        type: resetViews.type
      }]);
      expect(dispatchSpy.calls.all()[1].args).toEqual([{
        type: resetScore.type
      }]);
      expect(dispatchSpy.calls.mostRecent().args).toEqual([{
        type: resetMode.type
      }]);
      expect(dispatchSpy.calls.count()).toEqual(3);
    });
  });

});
