import { Move } from '@interfaces/move.interface';

export abstract class AbstractMove implements Move {
  public abstract name: string;
  public abstract image: string;
  public abstract strengths: string[];
  public abstract weaknesses: string[];
}
