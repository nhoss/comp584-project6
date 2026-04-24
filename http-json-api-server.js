// Import modules
const http = require('http')
const url = require('url')

// Get port from command line
const port = process.argv[2]

// Create server
const server = http.createServer(function (req, res) {

  // Parse URL and query string
  const parsed = url.parse(req.url, true)

  // Extract pathname and ISO date
  const pathname = parsed.pathname
  const iso = parsed.query.iso

  // Create Date object
  const date = new Date(iso)

  let result = null

  // Route: /api/parsetime
  if (pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  }

  // Route: /api/unixtime
  if (pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    }
  }

  // Send response if route matched
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    // If route doesn't match, return 404
    res.writeHead(404)
    res.end()
  }
})

// Start server
server.listen(port)