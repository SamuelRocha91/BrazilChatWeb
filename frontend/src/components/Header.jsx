import rectangle from '../images/rectangle.png';
import seta from '../images/seta.png';
import interrogacao from '../images/interrogacao.png'
import { useHistory } from 'react-router-dom';
import './header.css'


export default function Header() {
    const navigate = useHistory();
    return(
        <>
          <div id="titles">
             <div><img src={rectangle} alt="losângulo" /></div>
             <h3><a href="#student">Encontre professores</a></h3>
             <h3><a href="#teacher">Seja Professor</a></h3>
             <h3> Escolha seu plano</h3>
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
                <button  onClick={ () => navigate.push('/login') }>
                Login
                </button>
            </div>
         </div>
      </>
    )
}