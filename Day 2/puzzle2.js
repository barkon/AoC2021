const { readLines } = require("../common/util.js");

async function main() {
  let lines = await readLines("input1.txt");
  let commands = lines.map(line => line.split(" ")).map(command => [command[0], +command[1]]);
  let aim = 0;
  let horizontal = 0;
  let depth = 0;
  for (let [command, value] of commands) {
    if (command === "forward") {
      horizontal += value;
      depth += aim * value;
    } 
    if (command === "up") {
      aim -= value;
    }
    if (command === "down") {
      aim += value;
    }
  }
  console.log(`Final horizontal position multiplied by final depth is ${horizontal * depth}.`);
}

main();