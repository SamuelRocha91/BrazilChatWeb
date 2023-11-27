import './contentDash.css'
import { data } from '../utils/data'

export default function ContentDash() {
    return(
        <div className='total'>
            <div className='filter'>
                <h1>Professores</h1>
                <input type="text" />
            </div>
            <div className='mural'>
                {data.map(({name, isOnline, summary, image}) => (
                       <div key={name} className='card'>
                       <img src={image} alt="cão fessor" />
                           <div className='content'>
                               <h3>{name}</h3>
                               <p>{summary}</p>
                               <div>
                                   <div className={isOnline ? 'onCircle' : 'ofCircle'}></div>
                                   <p>{isOnline ? 'Online' : 'Offline'}</p>
                               </div>
                           </div>
                       </div>
                )
                 )}
             
            </div>
        </div>
    )
}