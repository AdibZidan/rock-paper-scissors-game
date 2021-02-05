import { AbstractMove } from './abstract-move.model';

export class Spock extends AbstractMove {
  public name: string = 'Spock';
  public image: string = '/assets/images/icon-spock.svg';
  public strengths: string[] = ['Scissors', 'Rock'];
  public weaknesses: string[] = ['Paper', 'Lizard'];
}
