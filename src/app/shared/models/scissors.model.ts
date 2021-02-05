import { AbstractMove } from './abstract-move.model';

export class Scissors extends AbstractMove {
  public name: string = 'Scissors';
  public image: string = '/assets/images/icon-scissors.svg';
  public strengths: string[] = ['Paper', 'Lizard'];
  public weaknesses: string[] = ['Rock', 'Spock'];
}
