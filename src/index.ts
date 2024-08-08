import { match } from 'assert';
import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { Summary, WinsAnalysis, ConsoleReport, HtmlReport } from "./utils";

// const reader = new MatchReader('football.csv');
// reader.read();
// const manuWins = reader.getTeamWins("Man United")

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Summary.printHello();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
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