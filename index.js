const fs = require('fs');
const sourcePath = process.argv[2];
const targetPath = process.argv[3];

function convertLine(str){
  return str.replace(/^\s*-\s/g, " [ ] ").replace(/^\s*x\s/g, " [X] ");
}

function writeInfoToFile(data){
  fs.writeFile(targetPath, data, (err) => {
    const lines = data.split(/\r|\n/g);
    const htmlLines = lines.map(convertLine);
    console.log(htmlLines);
    if(err)console.log(err);
  });
}

fs.readFile(sourcePath, 'utf8', (err, data) => {
  writeInfoToFile(data);
});
