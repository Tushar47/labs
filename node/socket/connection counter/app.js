var app = require('express')(),
	server = require('http').createServer(app).listen(8000),
	io = require('socket.io').listen(server)
	activeClients = 0;
	
app.get('/', function(request, response) {
	response.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
	activeClients += 1;
	console.log(activeClients);
	io.sockets.emit('message', { clients: activeClients });
	socket.on('disconnect', function() {
		activeClients -= 1;
		console.log(activeClients);
		io.sockets.emit('message', { clients: activeClients });
	});
});