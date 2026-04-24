// Import required modules
const http = require('http')
const fs = require('fs')

// Get port and file path from command line
const port = process.argv[2]
const file = process.argv[3]

// Create HTTP server
const server = http.createServer(function (req, res) {
  
  // Create a readable stream from the file
  const stream = fs.createReadStream(file)

  // Pipe the file stream directly to the HTTP response
  // This sends the file contents to the client
  stream.pipe(res)

  // Handle errors (e.g., file not found)
  stream.on('error', function (err) {
    res.statusCode = 500
    res.end('Server Error')
  })
})

// Start server
server.listen(port)