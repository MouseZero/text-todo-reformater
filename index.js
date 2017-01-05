const fs = require('fs');
const sourcePath = process.argv[2];
const targetPath = process.argv[3];

console.log("Source Path" + sourcePath);
console.log("Target Path" + targetPath);

fs.readFile(sourcePath, 'utf8', (err, data) => {
  fs.writeFile(targetPath, data, (err) => {
    if(err)console.log(err);
  })
});