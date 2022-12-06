const fs = require('fs/promises');

const MOCK = './mock/dev.txt';
let highestSum = 0;

const handleDataCollection = (dataArr) => {
  let count = dataArr.length;
  let currentSum = 0;

  dataArr.forEach((line) => {
    count -= 1;
    const hasSpace = !line;
    if (hasSpace) {
      highestSum = highestSum < currentSum ? currentSum : highestSum;

      console.log(`Current sum: ${currentSum}`);
      currentSum = 0;
      return;
    }
    currentSum += (parseInt(line, 10));

    if (count === 0) {
      highestSum = highestSum < currentSum ? currentSum : highestSum;
      console.log(`Current sum: ${currentSum}`);
    }
  });
  return highestSum;
};

async function readFile(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const dataArr = data.split(/\r?\n/);
    console.log(`Highest sum final: ${handleDataCollection(dataArr)}`);
  } catch (err) {
    console.log(err);
  }
}

readFile(MOCK);
