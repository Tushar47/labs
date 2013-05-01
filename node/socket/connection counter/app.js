var app = require('express')(),
	server = require('http').createServer(app).listen(8000),
	io = require('socket.io').listen(server);
	
app.get('/', function(request, response){
  response.sendfile(__dirname + "/index.html");
});
 
var activeClients = 0;
 
io.sockets.on('connection', function(socket) {
	activeClients += 1;
	io.sockets.emit('message', { clients: activeClients });
	socket.on('disconnect', function() {
		activeClients -= 1;
		io.sockets.emit('message', { clients: activeClients });
	});
});