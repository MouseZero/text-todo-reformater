const fs = require('fs');
const sourcePath = process.argv[2];
const targetPath = process.argv[3];
const R = require('ramda');
const F = require('./functional');

console.log( F.add(F.container(5), {val:9}).val );

function convertLine(str){
  return str
    .replace(/^\s*-\s/g, " <span style=\"font-weight: bold\">[ ]</span> ")
    .replace(/^\s*x\s/g, " <span style=\"font-weight: bold;color: red;\">[X]</span> ")
}

function writeInfoToFile(data){
  fs.writeFile(targetPath, data, (err) => {
    if(err)console.log(err);
  });
}

fs.readFile(sourcePath, 'utf8', (err, data) => {
  const lines = data.split(/\r|\n/g);
  const htmlLines = lines.map(convertLine);
  console.log(htmlLines.join("<br />"));
  writeInfoToFile(htmlLines.join("<br />"));
});
