const { readLines } = require("../common/util.js");

async function main() {
  let counter = 0;
  let lines = await readLines("input.txt");
  let previousDepth = lines[0];

  for (let i = 1; i < lines.length; i++) {
    if (+lines[i] > previousDepth) {
      counter++;
    }
    previousDepth = lines[i];
  }

  console.log(`There are ${counter} measurements larger than the previous measurement.`);
}

main();