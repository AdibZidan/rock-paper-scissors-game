import { hideView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewType } from '@enums/view-type/view-type.enum';
import { initialState } from '@mocks/initial-state.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {

  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
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

    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });

    it('Should have a defined props property', () => {
      expect(component.props).toEqual({
        value: 'fades slowly in',
        params: { timing: '0.5s' }
      });
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('Should have a defined view$ property', () => {
      expect(component.view$).toBeDefined();
    });

    it('Should have a defined mode$ property', () => {
      expect(component.mode$).toBeDefined();
    });

    it('Should hide the modal', () => {
      const dispatchSpy: jasmine.Spy = spyOn(mockStore, 'dispatch');

      component.hideModal();

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith({
        viewType: ViewType.MODAL,
        type: hideView.type
      });
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });
  });

});
