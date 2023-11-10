import rectangle from '../images/rectangle.png';
import seta from '../images/seta.png';
import interrogacao from '../images/interrogacao.png'
import start from '../images/start.png';
import mountain from '../images/mountain.png';
import { useHistory } from 'react-router-dom';
import './home.css'


function Home() {
  const navigate = useHistory();
    return (
      <>
      <header>
        <div id="titles">
          <img src={rectangle} alt="losângulo" />
          <h3>Encontre professores</h3>
          <h3>Seja Professor</h3>
          <h3> Escolha seu plano</h3>
        </div>
        <div id='page-links'>
        <select name="languages" id="languages">
          <option value="portugues">Português</option>
          <option value="english">English</option>
          <option value="mandarim"> 汉语</option>
          <option value="espanhol"> Español</option>
        </select>
        <img src={ interrogacao }alt="interrogação" />
        <div>
          <img src={seta} alt="seta" />
          <button  onClick={ () => navigate.push('/login') }>
            <h3>Login</h3>
          </button>
        </div>
        </div>
      </header>
      <main>
        <div id="text-button">
          <h1>Aprenda português do Brasil com professores nativos!</h1>
          <button 
          onClick={ () => navigate.push('/login') }
          >Começar <img src={start} alt="inicio" />
          </button>
        </div>
        <img id="mountain" src={mountain} alt="rio de janeiro" />
      </main>
      </>
    )
  }
  
export default Home;