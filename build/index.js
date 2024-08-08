"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchReader_1 = require("./MatchReader");
// const reader = new MatchReader('football.csv');
// reader.read();
// const manuWins = reader.getTeamWins("Man United")
const csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const manuWins = matchReader.getTeamWins("Man United");
console.log("Manu won " + manuWins);
