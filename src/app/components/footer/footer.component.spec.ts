import { showView } from '@actions/view.actions';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewType } from '@enums/view-type.enum';
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

  it('Should show the modal', () => {
    const dispatchSpy: jasmine.Spy = spyOn(mockStore, 'dispatch');

    component.showModal();

    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith({
      viewType: ViewType.MODAL,
      type: showView.type
    });
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

});
