// Import the built-in HTTP module
const http = require('http')

// Get the URL from command line arguments
const url = process.argv[2]

// Make a GET request to the provided URL
http.get(url, function (response) {

  // Set encoding so data comes as a string instead of Buffer
  response.setEncoding('utf8')

  // Listen for incoming data chunks
  response.on('data', function (data) {
    
    // Print each chunk to the console
    console.log(data)
  })

  // Optional: handle errors on the response
  response.on('error', function (err) {
    console.error(err)
  })

}).on('error', function (err) {
  // Handle request errors (e.g., bad URL, no connection)
  console.error(err)
})