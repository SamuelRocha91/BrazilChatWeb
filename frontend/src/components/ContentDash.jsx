import yoshi from '../images/yoshi.jpeg'
import './contentDash.css'

export default function ContentDash() {
    return(
        <div className='total'>
            <div className='filter'>
                <h1>Professores</h1>
                <input type="text" />
            </div>
            <div className='mural'>
                <div className='card'>
                <   img src={yoshi} alt="cão fessor" />
                    <div className='content'>
                        <h3>Professor</h3>
                        <p> Cão Fessor letrado em aurtuguês cachorresco com uma pitada de auau</p>
                        <p>Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}