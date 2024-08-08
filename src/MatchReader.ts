// import { CSVFileReader } from "./CSVFileReader";
import { dateStringToDate, MatchDataTuple, MatchResultEnum, DataReader, WinsAnalysis } from "./utils";

//  Inheritance approach
//  in this method MatchReader has all the properties of CSVFileReader
//  If match reader needs multiple types of reader, it will have to inherit from all of them

// export class MatchReader extends CSVFileReader<MatchDataTuple> {

//   mapRow(row: string[]): MatchDataTuple {
//     return [
//       dateStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResultEnum,
//       row[6],
//     ];
//   }

//   getTeamWins(team: string): number {
//     let teamWins = 0;
//     for (let match of this.data) {
//       if (match[1] === team && match[5] === MatchResultEnum.HomeWin) {
//         teamWins++;
//       } else if (match[2] === team && match[5] === MatchResultEnum.AwayWin) {
//         teamWins++;
//       }
//     }
//     return teamWins;
//   }
// }

// Composition approach
// MatchReader can read from different types of reader without inheritance
// Interface is used instead to compose MatchReader with different types of reader

export class MatchReader {
  matches: MatchDataTuple[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchDataTuple => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResultEnum,
        row[6],
      ];
    });
  }

  // getTeamWins(team: string): number {
  //   let teamWins = 0;
  //   for (let match of this.reader.data) {
  //     if (match[1] === team && match[5] === MatchResultEnum.HomeWin) {
  //       teamWins++;
  //     } else if (match[2] === team && match[5] === MatchResultEnum.AwayWin) {
  //       teamWins++;
  //     }
  //   }
  //   return teamWins;
  // }
}
