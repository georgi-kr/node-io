import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse';

// get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// main fn
(async () => {
  const promise = new Promise((resolve, reject) => {
    fs.createReadStream(
      __dirname + '/../files-io/account-levelisations.csv',
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

  const array = await promise;
  console.log(array);
})();
