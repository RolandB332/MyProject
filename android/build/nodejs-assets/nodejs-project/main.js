const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js!');
});

// Start the server
server.listen(3000, 'localhost', () => {
  console.log('Server is running on port 3000');
});