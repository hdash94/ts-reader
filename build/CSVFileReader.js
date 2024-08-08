"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// Inheritance-based approach
// is a relationship
// export abstract class CSVFileReader<T> {
//   data: T[] = [];
//   constructor(public filename: string) {}
//   abstract mapRow(row: string[]): T;
//   read(): void {
//     this.data = fs
//       .readFileSync(this.filename, {
//         encoding: 'utf-8',
//       })
//       .split('\n')
//       .map((row: string): string[] => row.split(','))
//       .map(this.mapRow);
//   }
// }
// Composition-based approach
// has a relationship
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => row.split(','));
    }
}
exports.CSVFileReader = CSVFileReader;
