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
      new Scissors(),
      new Spock(),
      new Paper(),
      new Lizard(),
      new Rock()
    ];
  }

  public static getMoveNames(): string[] {
    return this.getMoves().map((move: Move): string => move.name);
  }

  public static getRandomMove(): Move {
    const moves: Move[] = this.getMoves();
    const length: number = moves.length;

    return moves[this.getRandomIndex(length)];
  }

  private static getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

}
