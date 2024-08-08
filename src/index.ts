import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';

// const reader = new MatchReader('football.csv');
// reader.read();
// const manuWins = reader.getTeamWins("Man United")

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manuWins = matchReader.getTeamWins("Man United")

console.log("Manu won " + manuWins);