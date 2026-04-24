// Import the file system module
const fs = require('fs')

// Get directory and extension from command line arguments
const dir = process.argv[2]   // directory path
const ext = process.argv[3]   // extension (e.g. "md")

// Read directory asynchronously
fs.readdir(dir, function (err, files) {
  
  // Handle error
  if (err) {
    return console.error(err)
  }

  // Loop through files
  for (let i = 0; i < files.length; i++) {
    
    // Check if file ends with the given extension
    if (files[i].endsWith('.' + ext)) {
      
      // Print matching file
      console.log(files[i])
    }
  }
})