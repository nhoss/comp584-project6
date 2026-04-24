// Import the built-in file system module
const fs = require('fs')

// Read the file synchronously (blocking)
// process.argv[2] contains the file path passed from the command line
// 'utf8' ensures we get a string instead of a buffer
const contents = fs.readFileSync(process.argv[2], 'utf8')

// Split the file contents by newline characters
// This creates an array of lines
const lines = contents.split('\n')

// Number of newline characters is (number of lines - 1)
const newlineCount = lines.length - 1

// Print the result
console.log(newlineCount)
