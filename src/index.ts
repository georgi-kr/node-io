import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse';
import _ from 'lodash';

// get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// main fn
(async () => {
  const promiseOriginal: Promise<any[]> = new Promise((resolve, reject) => {
    fs.createReadStream(__dirname + '/../files-io/sorted-list.csv').pipe(
      parse(
        {
          columns: true,
          trim: true,
          delimiter: ',',
        },
        (err, records) => resolve(records),
      ),
    );
  });

  const promiseNewest: Promise<any[]> = new Promise((resolve, reject) => {
    fs.createReadStream(
      __dirname + '/../files-io/sorted-no-installations.csv',
    ).pipe(
      parse(
        {
          columns: true,
          trim: true,
          delimiter: ',',
        },
        (err, records) => resolve(records),
      ),
    );
  });

  const original = await promiseOriginal;
  const newest = await promiseNewest;

  fs.writeFileSync(
    __dirname + '/../files-io/old.json',
    JSON.stringify(original[2], null, 2),
  );
  fs.writeFileSync(
    __dirname + '/../files-io/new.json',
    JSON.stringify(newest[2], null, 2),
  );
  console.log('finished');
})();
