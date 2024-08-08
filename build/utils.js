"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.Summary = exports.ConsoleReport = exports.WinsAnalysis = exports.MatchResultEnum = exports.dateStringToDate = void 0;
const fs_1 = __importDefault(require("fs"));
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
var MatchResultEnum;
(function (MatchResultEnum) {
    MatchResultEnum["HomeWin"] = "H";
    MatchResultEnum["AwayWin"] = "A";
    MatchResultEnum["Draw"] = "D";
})(MatchResultEnum || (exports.MatchResultEnum = MatchResultEnum = {}));
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResultEnum.HomeWin) {
                teamWins++;
            }
            else if (match[2] === this.team && match[5] === MatchResultEnum.AwayWin) {
                teamWins++;
            }
        }
        return `${this.team} won ${teamWins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
class ConsoleReport {
    print(report) {
        console.log(report);
    }
}
exports.ConsoleReport = ConsoleReport;
class Summary {
    static printHello() {
        console.log("Print is done without creating an instance of Summary");
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
class HtmlReport {
    print(report) {
        const html = `
      <div>
        <h1>Analysis Report</h1>
        <div>${report}</div>
      </div>
    `;
        fs_1.default.writeFileSync('report.html', html);
    }
}
exports.HtmlReport = HtmlReport;
