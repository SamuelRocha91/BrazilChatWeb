import lua from '../images/lua.jpg'
import './publicity.css'

export default function Publicity() {
    return(
        <div className='publicity'>
            <div><h1>Minha Casa minha Lua</h1></div>
            <div>
                <img src={lua} alt="lua e oceano" />
            </div>
            <div>
                <p> Compre agora sua casa na lua em até 365 vezes! Ligue agora mesmo: (5571) 98846-3648!</p>
            </div>
        </div>
    )
}