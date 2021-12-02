const { readLines } = require("../common/util.js");

async function main() {
  let lines = await readLines("input1.txt");
  let commands = lines.map(line => line.split(" ")).map(command => [command[0], +command[1]]);
  let horizontal = 0;
  let depth = 0;
  for (let [command, value] of commands) {
    if (command === "forward") {
      horizontal += value;
    } 
    if (command === "up") {
      depth -= value;
    }
    if (command === "down") {
      depth += value;
    }
  }
  console.log(`Final horizontal position multiplied by final depth is ${horizontal * depth}.`);
}

main();