const http = require('http');

const nav = '<nav><a href="/">Home</a> | <a href="/about">About</a> | <a href="/skills">Skills</a> | <a href="/projects">Projects</a> | <a href="/contact">Contact</a></nav><hr>';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(`${nav}<h1>Home</h1><p>Welcome to my personal portfolio!</p>`);
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end(`${nav}<h1>About Me</h1><p>I am a Node.js developer.</p>`);
  } else if (req.url === '/skills') {
    res.statusCode = 200;
    res.end(`${nav}<h1>Skills</h1><p>HTML, CSS, JavaScript, Node.js</p>`);
  } else if (req.url === '/projects') {
    res.statusCode = 200;
    res.end(`${nav}<h1>Projects</h1><p>Project 1: Basic HTTP Server</p>`);
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end(`${nav}<h1>Contact Details</h1><p>Email: student@example.com</p>`);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});