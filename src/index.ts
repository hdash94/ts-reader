import fs from 'fs';
import { CSVFileReader } from './CSVFileReader';

const reader = new CSVFileReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manuWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manuWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manuWins++;
  }
}

console.log("Manu won " + manuWins);