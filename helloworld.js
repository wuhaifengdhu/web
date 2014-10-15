var http = require('http');

http.createServer(function(req, res){
   res.writeHead(200, {'content-type': 'text/plain'});
   res.end("Hello, World!\n");
   res.end('Hello, World!\n');
}).listen(800);

console.log('Server running on 800');
