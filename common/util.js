const readline = require('readline');
const fs = require('fs');

async function readLines(filename) {
  const rl = readline.createInterface({
    input: fs.createReadStream(filename),
  });

  let lines = []
  for await (const line of rl) {
    lines.push(line);
  }
  
  rl.close();
  return lines;
}

exports.readLines = readLines;