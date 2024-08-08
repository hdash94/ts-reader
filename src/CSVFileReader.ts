import fs from 'fs';

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
export class CSVFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}