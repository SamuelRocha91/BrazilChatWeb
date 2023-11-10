import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Dashboard({ socket }) {
  const [room, setRoom] = useState();
  const navigate = useHistory();

  const handleClick = () => {
    socket.emit('joinRoom', { room })
    navigate.push(`/dashboard/${room}`)
  }
 
    return (
      <>
        <h1>Selecione sua sala</h1>
        <input type="text" value={ room } onChange={() => setRoom(event.target.value)}/>
        <button onClick={ () => handleClick() }
>IR</button>
      </>
    )
  }
  
export default Dashboard;
