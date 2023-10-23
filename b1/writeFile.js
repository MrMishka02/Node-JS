let { writeFile } = require('fs');

writeFile('writefile.txt', 'Practice Node-js', (err) => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log('File written.');
})