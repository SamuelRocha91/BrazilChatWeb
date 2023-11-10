import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const [room, setRoom] = useState();
  const navigate = useHistory();

    return (
      <>
        <h1>Selecione sua sala</h1>
        <input type="text" value={room} onChange={() => setRoom(event.target.value)}/>
        <button onClick={ () => navigate.push(`/dashboard/${room}`) }
>IR</button>
      </>
    )
  }
  
export default Dashboard;
