const { readLines } = require("../common/util.js");

function getThreeMeasurementSum(measurements, index) {
  return measurements[index] + measurements[index + 1] + measurements[index + 2];
}

async function main() {
  let counter = 0;
  let lines = await readLines("input.txt");
  let measurements = lines.map(el => +el);
  let previousSum = getThreeMeasurementSum(measurements, 0);

  for (let i = 1; i + 2 < measurements.length; i++) {
    let currentSum = getThreeMeasurementSum(measurements, i);
    if (currentSum > previousSum) {
      counter++;
    }
    previousSum = currentSum;
  }

  console.log(`There are ${counter} sums larger than the previous sum.`);
}

main();