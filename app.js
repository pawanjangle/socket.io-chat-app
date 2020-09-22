const app = require('express')(); 
const server = require('http').createServer(app); 
const io = require('socket.io')(server);
const port = process.env.port || 5000;
let clients = [];
let messageList = [];
 io.on('connection', (socket) => { 
 console.log( "io connected", socket );
 clients.push(socket); socket.emit('messageList', messageList); socket.on('onMessage', data => { messageList.push({ message:data.message, senderId: socket.id
 }); 
 clients.map((cl)=> cl.emit('messageList', messageList))
 });
 socket.on('disconnect', () => { clients = clients.filter((client, index) => client.id !== socket.id); });
 });
 app.get( "/", ( req, res ) =>{
 res.send( "hello" );
 } );
 server.listen( port, (  ) =>console.log( "Express server listening on port: " +port ) );