var http = require('http');
http.createServer(function (req, res) {
console.log(req);
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(8080);
console.log('Server listening on port 80');
