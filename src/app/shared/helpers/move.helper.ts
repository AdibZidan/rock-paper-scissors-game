import { Move } from '@interfaces/move.interface';
import { Lizard } from '@models/lizard.move';
import { Paper } from '@models/paper.model';
import { Rock } from '@models/rock.model';
import { Scissors } from '@models/scissors.model';
import { Spock } from '@models/spock.model';

export class MoveHelper {

  private constructor() { }

  public static getMoves(): Move[] {
    return [
      new Rock(),
      new Paper(),
      new Scissors(),
      new Lizard(),
      new Spock()
    ];
  }

  public static getMoveNames(): string[] {
    return this.getMoves().map((move: Move): string => move.name);
  }

}
