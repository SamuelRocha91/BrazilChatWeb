import './room.css'
import  { useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import propTypes from 'prop-types';
import { SocketContext } from "../SocketContext";


function Room({ socket }) {
  // cria estado para manipular mensagens enviadas no chat e tornar o input elemento controlado
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // cria estado para armazenar dados da máquina do usuário a fazer chamada de video
    const location = useLocation();
    const { callAccepted, myVideo, userVideo, callEnded, stream } =
		useContext(SocketContext);
    // torna possível a comunicação via chat através da emissão de eventos com socket.io
    const handleSendMessage = (e) => {
      e.preventDefault();
      socket.emit('message', {
        text: message,
        room: location.pathname.slice(11)
      });
      setMessage('');
    };
    

  // cria evento para sempre que os usuários enviarem mensagens
  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);


    return (
      <div id="room">
        <div id='videos'>
            <h1>Videos</h1>
            {stream && (
						<video
							playsInline
							muted
							ref={myVideo}
              className='responsive-video'
							autoPlay
						/>
			)}
			{callAccepted && !callEnded && (
						<video
							playsInline
							ref={userVideo}
              className='responsive-video'
							autoPlay
						/>
			)}
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
