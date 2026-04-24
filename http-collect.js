// Import the built-in HTTP module
const http = require('http')

// Get the URL from the command line
const url = process.argv[2]

// Make a GET request to the URL
http.get(url, function (response) {
  // Convert incoming data to strings instead of Buffers
  response.setEncoding('utf8')

  // Variable to store the full response body
  let rawData = ''

  // Each time a chunk of data arrives, add it to rawData
  response.on('data', function (chunk) {
    rawData += chunk
  })

  // When all data has been received, print the results
  response.on('end', function () {
    // Print the total number of characters
    console.log(rawData.length)

    // Print the complete response body
    console.log(rawData)
  })

  // Handle response errors
  response.on('error', function (err) {
    console.error(err)
  })
}).on('error', function (err) {
  // Handle request errors
  console.error(err)
})