import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import './dashboard.css'
import NavLinks from '../components/NavLinks';
import ContentDash from '../components/ContentDash';
import samuel from '../images/samuel.png'

function Dashboard({ socket }) {
  const [room, setRoom] = useState();
  const navigate = useHistory();

  const handleClick = () => {
    socket.emit('joinRoom', { room })
    navigate.push(`/dashboard/${room}`)
  }
 
    return (
      <div id='dash'>
        <NavLinks />
        <div className='main'>
          <main>
          <ContentDash />
          </main>
          <section>
             <div className='room'>
               <h1>Digite uma sala:</h1>
                <input type="text" value={ room } onChange={() => setRoom(event.target.value)}/>
                <button onClick={ () => handleClick() }
               >IR</button>
             </div>
            <div className='video'>
            <iframe  src="https://www.youtube.com/embed/5R3eZqy-_gc" frameBorder="0" allowfullscreen></iframe>
            </div>
            <div className='autor'>
              <div className='title'>
                <h3>Samuel Rocha</h3>
                <p>Conheça mais do maluco beleza</p>
              </div>
              <div><img src={samuel} alt="foto de perfil do autor" /></div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  
Dashboard.propTypes = {
  socket: propTypes.shape({
    emit: propTypes.func.isRequired,
  }).isRequired
}
export default Dashboard;
