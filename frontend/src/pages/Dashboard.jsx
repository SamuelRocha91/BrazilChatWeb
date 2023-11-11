import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import './dashboard.css'

function Dashboard({ socket }) {
  const [room, setRoom] = useState();
  const navigate = useHistory();

  const handleClick = () => {
    socket.emit('joinRoom', { room })
    navigate.push(`/dashboard/${room}`)
  }
 
    return (
      <div id='dash'>
        <h1>Digite sua sala</h1>
        <input type="text" value={ room } onChange={() => setRoom(event.target.value)}/>
        <button onClick={ () => handleClick() }
>IR</button>
      </div>
    )
  }
  
Dashboard.propTypes = {
  socket: propTypes.shape({
    emit: propTypes.func.isRequired,
  }).isRequired
}
export default Dashboard;
