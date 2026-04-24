// Import the file system module
const fs = require('fs')

// Read the file asynchronously
// process.argv[2] is the file path passed from the command line
// 'utf8' ensures we get a string instead of a buffer
fs.readFile(process.argv[2], 'utf8', function (err, data) {
  
  // If an error occurs, stop execution and print the error
  if (err) {
    return console.error(err)
  }

  // Split the file contents by newline characters
  const lines = data.split('\n')

  // Number of newline characters = number of lines - 1
  const newlineCount = lines.length - 1

  // Print the result
  console.log(newlineCount)
})