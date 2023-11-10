import './room.css'
import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './room.css'


function Room({ socket }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const handleSendMessage = (e) => {
      e.preventDefault();
      socket.emit('message', {
        text: message,
        room: location.pathname.slice(11)
      });
      setMessage('');
      
    };


    useEffect(() => {
      socket.on('messageResponse', (data) => setMessages([...messages, data]));
      console.log(messages)
    }, [socket, messages]);

    return (
      <div id="room">
        <div id='videos'>
            <h1>Videos</h1>
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
  

export default Room
