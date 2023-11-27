import propTypes from 'prop-types';
import BrazSpeak from '../images/BrazilianSpeak.png'
import './braspeak.css'

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function BraSpeak({ socket }) {
    const navigate = useHistory();

    const [room, setRoom] = useState();
    const handleClick = () => {
        socket.emit('joinRoom', { room })
        navigate.push(`/dashboard/${room}`)
      }
    return(
        <div className='first-div'>
            <div className='second-div'>
                <div className='bra'><img  src={BrazSpeak} alt="logo" /></div>
                 <div>
                    <h1>Aprenda português agora!</h1>
                    <p>Professores nativos no seu aguardo!</p>
                 </div>
            </div>
            <div className='third-div'>
              <h1>Digite uma sala:</h1>
              <input type="text" value={ room } onChange={() => setRoom(event.target.value)}/>
              <button onClick={ () => handleClick() }
                      >IR</button>
            </div> 
       </div>  )
}

BraSpeak.propTypes = {
    socket: propTypes.shape({
      emit: propTypes.func.isRequired,
    }).isRequired
  }