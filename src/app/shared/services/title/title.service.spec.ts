import { TestBed, waitForAsync } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Mode } from '@enums/mode.enum';
import { BONUS, DEFAULT, ORIGINAL } from '@helpers/title.helper';
import { initialState } from '@mocks/initial-state.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TitleService } from './title.service';

describe('TitleService', () => {

  let service: TitleService;
  let mockStore: MockStore;
  let title: Title;
  let titleSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(TitleService);
    mockStore = TestBed.inject(MockStore);
    title = TestBed.inject(Title);
    titleSpy = spyOn(title, 'setTitle');
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

  it('Should initially have a default title', (doneFn: DoneFn) => {
    service.setTitle$().subscribe(() => {
      const expectedTitle: string = DEFAULT;

      expect(titleSpy).toHaveBeenCalledWith(expectedTitle);

      doneFn();
    });
  });

  it('Should change the title to original title', (doneFn: DoneFn) => {
    mockStore.overrideSelector('mode', Mode.ORIGINAL);

    service.setTitle$().subscribe(() => {
      const expectedTitle: string = ORIGINAL;

      expect(titleSpy).toHaveBeenCalledWith(expectedTitle);

      doneFn();
    });
  });

  it('Should change the title to bonus title', (doneFn: DoneFn) => {
    mockStore.overrideSelector('mode', Mode.BONUS);

    service.setTitle$().subscribe(() => {
      const expectedTitle: string = BONUS;

      expect(titleSpy).toHaveBeenCalledWith(expectedTitle);

      doneFn();
    });
  });

});
