import './contentDash.css'
import { data } from '../utils/data'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ContentDash() {
    return(
        <div className='total'>
            <div className='filter'>
                <h1>Professores</h1>
                <input type="text" />
            </div>
            <div className='mural'>
                {data.map(({name, isOnline, summary, image}, id) => (
        
                       <Link  key={name} to={`/dashboard/details/${id}`}  className='card'>
                       <img src={image} alt="cão fessor" />
                           <div className='content'>
                               <h3>{name}</h3>
                               <p>{summary}</p>
                               <div>
                                   <div className={isOnline ? 'onCircle' : 'ofCircle'}></div>
                                   <p>{isOnline ? 'Online' : 'Offline'}</p>
                               </div>
                           </div>
                       </Link>
                )
                 )}
             
            </div>
        </div>
    )
}