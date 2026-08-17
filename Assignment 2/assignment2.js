const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  res.end(`
    <h1>Student Portal</h1>
    <p><strong>Name:</strong> John Doe</p>
    <p><strong>Course:</strong> Full Stack Development</p>
    <p><strong>College:</strong> XYZ College</p>
    <p>Welcome to our Node.js application.</p>
  `);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});