"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchReader_1 = require("./MatchReader");
const utils_1 = require("./utils");
// const reader = new MatchReader('football.csv');
// reader.read();
// const manuWins = reader.getTeamWins("Man United")
const csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// Summary.printHello();
const summary = new utils_1.Summary(new utils_1.WinsAnalysis('Man United'), new utils_1.ConsoleReport()
// new HtmlReport()
);
summary.buildAndPrintReport(matchReader.matches);
// class ArrayOfThings<T> {
//   constructor(public collection: T[]) {}
//   get(index: number): T {
//     return this.collection[index];
//   }
// }
// const arr = new ArrayOfThings<string>(['a', 'b', 'c']);
