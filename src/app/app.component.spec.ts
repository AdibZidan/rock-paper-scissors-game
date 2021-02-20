import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { DEFAULT } from '@helpers/title/title.helper';
import { initialState } from '@mocks/initial-state.mock';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { ArenaComponent } from './components/arena/arena.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModeSelectorComponent } from './components/mode-selector/mode-selector.component';
import { BonusComponent } from './shared/components/bonus/bonus.component';
import { OriginalComponent } from './shared/components/original/original.component';
import { TitleService } from './shared/services/title/title.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleService: TitleService;
  let title: Title;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ArenaComponent,
        BattlegroundComponent,
        FooterComponent,
        HeaderComponent,
        ModalComponent,
        ModeSelectorComponent,
        BonusComponent,
        OriginalComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(TitleService);
    title = TestBed.inject(Title);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('After initialization', () => {
    let getUpdatedTitleSpy: jasmine.Spy;

    beforeEach(() => {
      getUpdatedTitleSpy = spyOn(
        titleService,
        'getUpdatedTitle$'
      ).and.callThrough();

      component.ngOnInit();
    });

    it('Should call title update', () => {
      expect(getUpdatedTitleSpy).toHaveBeenCalled();
      expect(getUpdatedTitleSpy).toHaveBeenCalledTimes(1);
      expect(title.getTitle()).toEqual(DEFAULT);
    });
  });

});
