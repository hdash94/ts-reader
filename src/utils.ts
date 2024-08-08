import fs from 'fs';
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      return parseInt(value);
    });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

export enum MatchResultEnum {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export type MatchDataTuple = [
  Date, 
  string, 
  string, 
  number, 
  number, 
  MatchResultEnum, 
  string
];

export interface DataReader {
  read(): void;
  data: string[][];
}

export interface Analyzer {
  run(matches: MatchDataTuple[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchDataTuple[]): string {
    let teamWins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResultEnum.HomeWin) {
        teamWins++;
      } else if (match[2] === this.team && match[5] === MatchResultEnum.AwayWin) {
        teamWins++;
      }
    }
    return `${this.team} won ${teamWins} games`;
  }
}

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export class Summary {
  
  static printHello(): void {
    console.log("Print is done without creating an instance of Summary");
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  buildAndPrintReport(matches: MatchDataTuple[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Report</h1>
        <div>${report}</div>
      </div>
    `;
    fs.writeFileSync('report.html', html);
  }
}