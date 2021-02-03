import { Component } from '@angular/core';
import { MoveHelper } from '@helpers/move.helper';
import { Move } from '@interfaces/move.interface';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent {
  public moves: Move[] = MoveHelper.getMoves();
}
