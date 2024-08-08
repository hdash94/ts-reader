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

Summary.printHello();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
  // new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
