const http = require('http');
const fs = require('fs');
const PORT = 5500;

const server = http.createServer(function(req, res){
	res.writeHeader(200, {'content-type': 'text/html'});
	fs.createReadStream('index.html').pipe(res);

}
);

server.listen(PORT);
console.log(`port started on port ${PORT}`);
