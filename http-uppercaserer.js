// Import required modules
const http = require('http')
const map = require('through2-map')

// Get port from command line
const port = process.argv[2]

// Create HTTP server
const server = http.createServer(function (req, res) {

  // Only process POST requests
  if (req.method === 'POST') {

    // Pipe request through a transform stream
    // This converts each chunk to uppercase
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)

  } else {
    // For non-POST requests, do nothing (or end response)
    res.end('Send a POST request\n')
  }
})

// Start server
server.listen(port)