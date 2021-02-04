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
      new Scissors(),
      new Spock(),
      new Paper(),
      new Lizard(),
      new Rock()
    ]);
  });

  it('Should get the move names', () => {
    expect(MoveHelper.getMoveNames()).toBeDefined();
    expect(MoveHelper.getMoveNames()).toEqual([
      'Scissors', 'Spock', 'Paper', 'Lizard', 'Rock'
    ]);
  });

  it('Should get a random move', () => {
    const getRandomMoveSpy: jasmine.Spy = spyOn(
      MoveHelper,
      'getRandomMove'
    ).and.returnValue(new Rock());

    expect(MoveHelper.getRandomMove()).toBeDefined();
    expect(MoveHelper.getRandomMove()).toEqual(getRandomMoveSpy());
  });
});
