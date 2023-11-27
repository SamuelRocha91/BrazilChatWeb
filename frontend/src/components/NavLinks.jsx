import rectangle from '../images/rectangle.png';
import seta from '../images/seta.png';
import interrogacao from '../images/interrogacao.png'
import { useHistory } from 'react-router-dom';
import './header.css'
import '../pages/details.css'


export default function NavLinks() {
    const navigate = useHistory();
    return(
        <div className='home-header'>
          <div id="titles">
             <div><img src={rectangle} alt="losângulo" /></div>
             <h3><a href="#student">Professores</a></h3>
             <h3><a href="#teacher">Meu perfil</a></h3>
             <h3>Agenda</h3>
         </div>
         <div id='page-links'>
            <select name="languages" id="languages">
              <option value="portugues">Português</option>
              <option value="english">English</option>
              <option value="mandarim"> 汉语</option>
            <option value="espanhol"> Español</option>
            </select>
            <div id='navigate'>
                <img src={seta} alt="seta" />
                <img src={ interrogacao }alt="interrogação" />
                <button  onClick={ () => navigate.push('/') }>
                Sair
                </button>
            </div>
         </div>
      </div>
    )
}