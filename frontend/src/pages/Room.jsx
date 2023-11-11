import './room.css'
import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './room.css'
import propTypes from 'prop-types';


let myStream = null


function Room({ socket }) {
  // cria estado para manipular mensagens enviadas no chat e tornar o input elemento controlado
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // cria estado para armazenar dados da máquina do usuário a fazer chamada de video
    const [localPLayer, setLocalPlayer] = useState('')
    const location = useLocation();

    // torna possível a comunicação via chat através da emissão de eventos com socket.io
    const handleSendMessage = (e) => {
      e.preventDefault();
      socket.emit('message', {
        text: message,
        room: location.pathname.slice(11)
      });
      setMessage('');
      
    };
    
    // inicializa a solicitação de acesso a câmera do usuário após o carregamento da página.
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(function (stream) {
            myStream = stream
            setLocalPlayer(myStream)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])

    // cria evento para sempre que os usuários enviarem mensagens
    useEffect(() => {
      socket.on('messageResponse', (data) => setMessages([...messages, data]));
      console.log(messages)
    }, [socket, messages]);

    return (
      <div id="room">
        <div id='videos'>
            <h1>Videos</h1>
           { localPLayer && <video id="local-player" ref={ video => {video.srcObject = localPLayer}}  className="responsive-video" autoPlay muted></video>}
        </div>
        <div id="form-input">
          <div className="message__container">
            {messages.map((message) =>
              <>
                <div className="message__chats" key={message.id}>
                  <div className="message__recipient">
                    <p>{message}</p>
                  </div>
                </div>
              </>
                )}
          </div>
          <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Write message"
                  className="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
                <button className="sendBtn">SEND</button>
            </form>
            </div>
         </div>
      </div>)
  }
  
Room.propTypes = {
    socket: propTypes.shape({
      emit: propTypes.func.isRequired,
      on:  propTypes.func.isRequired,
    }).isRequired
  }

export default Room
