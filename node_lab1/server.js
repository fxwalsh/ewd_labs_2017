// Load the http module to create an http server.
import http from 'http';
import config from './config';
import greeting  from './greeting'

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer((req, res) => {
  var language = req.headers["accept-language"];
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(greeting[language]||greeting["en"]);
});
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(config.port);

// Put a friendly message on the terminal
console.log("Server running at " + config.port);
