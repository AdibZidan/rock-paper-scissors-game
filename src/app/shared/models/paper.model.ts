import { AbstractMove } from './abstract-move.model';

export class Paper extends AbstractMove {
  public name: string = 'Paper';
  public image: string = '/assets/images/icon-paper.svg';
  public strengths: string[] = ['Rock', 'Spock'];
  public weaknesses: string[] = ['Lizard', 'Scissors'];
}
