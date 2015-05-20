var http = require('http'),
	static = require('node-static');

var file = new(static.Server)();
var port = process.env.PORT || 8000;

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port, function() {
	console.log("Server running at http://127.0.0.1:" + port);
});