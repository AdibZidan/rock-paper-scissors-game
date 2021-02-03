import { hideModal } from '@actions/modal.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
    it('Should have an undefined isModalShown$ property', () => {
      expect(component.isModalShown$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('Should select isModalShown property from the store', () => {
      expect(component.isModalShown$).toBeDefined();
    });

    it('Should hide the modal', () => {
      const dispatchSpy: jasmine.Spy = spyOn(mockStore, 'dispatch');

      component.hideModal();

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith({
        type: hideModal.type
      });
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });
  });

});
