let { readFileSync } = require("fs");

try {
  const text = readFileSync("file.txt", "utf-8");
  console.log(text);
} catch (error) {
  console.log(error);
}

console.log('The end!')