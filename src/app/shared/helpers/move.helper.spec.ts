import { Lizard } from '@models/lizard.move';
import { Paper } from '@models/paper.model';
import { Rock } from '@models/rock.model';
import { Scissors } from '@models/scissors.model';
import { Spock } from '@models/spock.model';
import { MoveHelper } from './move.helper';

describe('MoveHelper', () => {
  it('Should get the original moves', () => {
    expect(MoveHelper.getOriginalMoves()).toBeDefined();
    expect(MoveHelper.getOriginalMoves()).toEqual([
      new Scissors(),
      new Paper(),
      new Rock()
    ]);
  });

  it('Should get the bonus moves', () => {
    expect(MoveHelper.getBonusMoves()).toBeDefined();
    expect(MoveHelper.getBonusMoves()).toEqual([
      new Scissors(),
      new Spock(),
      new Paper(),
      new Lizard(),
      new Rock()
    ]);
  });

  it('Should get the original move names', () => {
    expect(MoveHelper.getOriginalMoveNames()).toBeDefined();
    expect(MoveHelper.getOriginalMoveNames()).toEqual([
      'Scissors', 'Paper', 'Rock'
    ]);
  });

  it('Should get the bonus move names', () => {
    expect(MoveHelper.getBonusMoveNames()).toBeDefined();
    expect(MoveHelper.getBonusMoveNames()).toEqual([
      'Scissors', 'Spock', 'Paper', 'Lizard', 'Rock'
    ]);
  });

  it('Should get a random original move', () => {
    const getRandomMoveSpy: jasmine.Spy = spyOn(
      MoveHelper,
      'getRandomOriginalMove'
    ).and.returnValue(new Rock());

    expect(MoveHelper.getRandomOriginalMove()).toBeDefined();
    expect(MoveHelper.getRandomOriginalMove()).toEqual(getRandomMoveSpy());
  });

  it('Should get a random bonus move', () => {
    const getRandomMoveSpy: jasmine.Spy = spyOn(
      MoveHelper,
      'getRandomBonusMove'
    ).and.returnValue(new Scissors());

    expect(MoveHelper.getRandomBonusMove()).toBeDefined();
    expect(MoveHelper.getRandomBonusMove()).toEqual(getRandomMoveSpy());
  });
});
