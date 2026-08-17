const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to Home Page');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Us');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact Information');
  } else if (req.url === '/services') {
    res.statusCode = 200;
    res.end('Our Services');
  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});