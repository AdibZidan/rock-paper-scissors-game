import { Move } from '@interfaces/move.interface';

export abstract class AbstractMove implements Move {
  public abstract name: string;
}
