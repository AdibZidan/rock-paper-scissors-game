import { Lizard } from '@models/lizard.move';
import { Paper } from '@models/paper.model';
import { Rock } from '@models/rock.model';
import { Scissors } from '@models/scissors.model';
import { Spock } from '@models/spock.model';
import { MoveHelper } from './move.helper';

describe('MoveHelper', () => {
  it('Should get the moves', () => {
    expect(MoveHelper.getMoves()).toBeDefined();
    expect(MoveHelper.getMoves()).toEqual([
      new Rock(),
      new Paper(),
      new Scissors(),
      new Lizard(),
      new Spock()
    ]);
  });

  it('Should get the move names', () => {
    expect(MoveHelper.getMoveNames()).toBeDefined();
    expect(MoveHelper.getMoveNames()).toEqual([
      'Rock', 'Paper', 'Scissors',
      'Lizard', 'Spock'
    ]);
  });
});
