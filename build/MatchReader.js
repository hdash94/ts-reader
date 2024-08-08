"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
//  Inheritance approach
//  in this method MatchReader has all the properties of CSVFileReader
//  If match reader needs multiple types of reader, it will have to inherit from all of them
// export class MatchReader extends CSVFileReader<MatchData> {
//   mapRow(row: string[]): MatchData {
//     return [
//       dateStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResult,
//       row[6],
//     ];
//   }
//   getTeamWins(team: string): number {
//     let teamWins = 0;
//     for (let match of this.data) {
//       if (match[1] === team && match[5] === MatchResult.HomeWin) {
//         teamWins++;
//       } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
//         teamWins++;
//       }
//     }
//     return teamWins;
//   }
// }
// Composition approach
// MatchReader can read from different types of reader without inheritance
// Interface is used instead to compose MatchReader with different types of reader
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
    getTeamWins(team) {
        let teamWins = 0;
        for (let match of this.reader.data) {
            if (match[1] === team && match[5] === MatchResult.HomeWin) {
                teamWins++;
            }
            else if (match[2] === team && match[5] === MatchResult.AwayWin) {
                teamWins++;
            }
        }
        return teamWins;
    }
}
exports.MatchReader = MatchReader;
