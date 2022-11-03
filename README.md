# node-io

Simple node js app to modify files (csv, json)

> - example to transform csv to json array

```javascript
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
```
