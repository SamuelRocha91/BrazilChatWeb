const express = require('express');
const app = express();
const PORT = 3000;

const http = require('http').Server(app);
const cors = require('cors');



const socketIO = require('socket.io')(http, {
    cors: {
        origin: '*', // url aceita pelo cors
        methods: ['GET', 'POST'], // Métodos aceitos pela url
      },
});
app.use(cors());

// ativa a lógica de eventos do socjet.io para responder o front end e intermediar os dados
socketIO.on('connection', (socket) => {

    //cria acesso de usuários a sala específica de chat
    socket.on('joinRoom', ({  room }) => {
        socket.join(room);

    });
    // recebe a mensagem de um usuário e passa ao outro
    socket.on('message', (data) => {
        const {text, room} = data
        socketIO.to(room).emit('messageResponse', text);
      });

      socket.emit("me", socket.id);
  
      socket.on("callUser", ({ userToCall, signalData, from, name }) => {
          io.to(userToCall).emit("callUser", { signal: signalData, from, name });
      });
  
      socket.on("answerCall", (data) => {
          io.to(data.to).emit("callAccepted", data.signal);
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