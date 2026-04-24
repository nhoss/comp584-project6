// Import your custom module (must be in the same folder)
const mymodule = require('./mymodule.js')

// Get arguments from command line
const dir = process.argv[2]   // directory path
const ext = process.argv[3]   // file extension (without dot)

// Call your module function
// It takes (dir, ext, callback)
mymodule(dir, ext, function (err, files) {
  
  // Handle error if something goes wrong
  if (err) {
    return console.error(err)
  }

  // Loop through filtered files returned from module
  for (let i = 0; i < files.length; i++) {
    console.log(files[i])
  }
})