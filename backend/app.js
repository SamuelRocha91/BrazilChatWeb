const express = require('express');
const app = express();
const PORT = 3000;

const http = require('http').Server(app);
const cors = require('cors');


app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173', // url aceita pelo cors
        methods: ['GET', 'POST'], // Métodos aceitos pela url
      },
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    socket.on('joinRoom', ({  room }) => {
        socket.join(room);
    
    });

    socket.on('message', (data) => {
        const {text, room} = data
        socketIO.to(room).emit('messageResponse', text);
      });
    
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});



http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});