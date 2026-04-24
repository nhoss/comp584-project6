// Import the built-in HTTP module
const http = require('http')

// Array to store results in the correct order
const results = []

// Counter to track how many requests are finished
let completed = 0

// Function to collect all data from one URL
function getData(index) {
  // Make GET request to the URL at the given index
  http.get(process.argv[2 + index], function (response) {
    // Convert incoming chunks to strings
    response.setEncoding('utf8')

    // Variable to store the full response body
    let rawData = ''

    // Add each chunk to rawData
    response.on('data', function (chunk) {
      rawData += chunk
    })

    // When the response is complete
    response.on('end', function () {
      // Save the result in the correct position
      results[index] = rawData

      // Increase finished counter
      completed++

      // If all 3 requests are done, print them in order
      if (completed === 3) {
        for (let i = 0; i < 3; i++) {
          console.log(results[i])
        }
      }
    })
  }).on('error', function (err) {
    console.error(err)
  })
}

// Start requests for all 3 URLs
for (let i = 0; i < 3; i++) {
  getData(i)
}