import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BattlegroundComponent } from './battleground.component';

describe('BattlegroundComponent', () => {

  let component: BattlegroundComponent;
  let fixture: ComponentFixture<BattlegroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BattlegroundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlegroundComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

});
