const fs = require('fs');

const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

getData()
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(console.log('ran function'));