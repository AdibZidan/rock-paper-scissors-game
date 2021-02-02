import { Component } from '@angular/core';
import { MoveHelper } from '@helpers/move.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public titles: string[] = MoveHelper.getMoveNames();
  public score: number = 0;

}
