import { useHistory } from 'react-router-dom';
import start from '../images/start.png';
import mountain from '../images/mountain.png';
import './learnPortuguese.css'

export default function LearnPortuguese() {
    const navigate = useHistory();
    return (
        <>
          <div id="text-button">
            <h1>Aprenda português do Brasil com professores nativos!</h1>
            <button 
            onClick={ () => navigate.push('/login') }
            >Começar <img src={start} alt="inicio" />
            </button>
          </div>
           <div id="mountain-container"><img id="mountain" src={mountain} alt="rio de janeiro" /></div>
        </>
    )
}