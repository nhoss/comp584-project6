// Import the net module (used to create TCP servers)
const net = require('net')

// Get port number from command line
const port = process.argv[2]

// Helper function to format numbers to 2 digits (e.g. 5 → "05")
function pad(num) {
  return num < 10 ? '0' + num : num
}

// Create server
const server = net.createServer(function (socket) {
  // Get current date and time
  const date = new Date()

  // Format date as YYYY-MM-DD HH:MM
  const formatted =
    date.getFullYear() + '-' +
    pad(date.getMonth() + 1) + '-' +  // month starts at 0
    pad(date.getDate()) + ' ' +
    pad(date.getHours()) + ':' +
    pad(date.getMinutes())

  // Send formatted date + newline
  socket.end(formatted + '\n')
})

// Start server on given port
server.listen(port)