export interface Poem {
  name: string;
  creationDate: Date;
  remainingLines: number;
  maxCharsPerLine: number;
  occupied: Boolean;
  lines: Array<Line>;
  spectators: number;
  participants: Array<string>;
}

export interface Line {
  id: string;
  creator: string;
  creationDate: Date;
  content: string;
}
