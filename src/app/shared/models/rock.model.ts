import { AbstractMove } from './abstract-move.model';

export class Rock extends AbstractMove {
  public name: string = 'Rock';
  public image: string = 'assets/images/icon-rock.svg';
  public strengths: string[] = ['Lizard', 'Scissors'];
  public weaknesses: string[] = ['Spock', 'Paper'];
}
