import fs from 'fs/promises';

const handleDataCollection = (dataArr) => {
  let count = dataArr.length;
  let currentSum = 0;
  const listOfElves = [];

  dataArr.forEach((line) => {
    count -= 1;
    const hasSpace = !line;
    if (hasSpace) {
      listOfElves.push(currentSum);
      console.log(`Current sum: ${currentSum}`);
      currentSum = 0;
      return;
    }
    currentSum += (parseInt(line, 10));

    if (count === 0) {
      listOfElves.push(currentSum);
      console.log(`Current sum: ${currentSum}`);
    }
  });

  return listOfElves.sort((a, b) => b - a);
};

const getSomeOfTopThree = (arr) => {
  let topThreeSum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    topThreeSum += arr[i];
    if (i === 2) {
      break;
    }
  }

  return topThreeSum;
};

async function readFile(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const dataArr = data.split(/\r?\n/);
    const sortedListOfElves = (handleDataCollection(dataArr));
    console.log(getSomeOfTopThree(sortedListOfElves));
  } catch (err) {
    console.log(err);
  }
}

const start = (pathFile) => {
  readFile(pathFile);
};

export default start;
