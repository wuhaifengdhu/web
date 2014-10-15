var http = require('http');

http.createServer(function(req, res){
   res.writeHead(200, {'content-type': 'text/plain'});
   res.end("This is wu haifeng's web station\n");
}).listen(80);

console.log('Server running on 80');
