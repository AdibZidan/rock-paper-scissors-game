import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have a defined titles property', () => {
      expect(component.titles).toBeDefined();
      expect(component.titles).toEqual([
        'Rock', 'Paper', 'Scissors',
        'Lizard', 'Spock'
      ]);
    });

    it('Should have a defined score property', () => {
      expect(component.score).toBeDefined();
      expect(component.score).toEqual(0);
    });
  });

});
