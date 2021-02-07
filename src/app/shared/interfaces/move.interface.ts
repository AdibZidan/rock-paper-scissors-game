export interface Move {
  name: string;
  image: string;
  strengths: string[];
  weaknesses: string[];
  isWinner?: boolean;
}
