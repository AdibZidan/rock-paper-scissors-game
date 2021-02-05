import { AbstractMove } from './abstract-move.model';

export class Lizard extends AbstractMove {
  public name: string = 'Lizard';
  public image: string = '/assets/images/icon-lizard.svg';
  public strengths: string[] = ['Spock', 'Paper'];
  public weaknesses: string[] = ['Scissors', 'Rock'];
}
