import NavLinks from "../components/NavLinks";
import { useParams } from 'react-router-dom';
import { data } from '../utils/data'
import './details.css'

export default function Details() {
    const { id } = useParams();

    return(
        <>
          <NavLinks />
          <div className="detailsTeacher">
             <div className="blockOne">
                <div className="imageteacher">
                    <img src={data[id].image} alt="caofessor" />
                </div>
                <div className="caracteres">
                    <div className="descriptionQuali">
                        <h1>{data[id].name}</h1>
                        <h2>{data[id].summary}</h2>
                         <p>{data[id].details}</p>
                         <div className="statusInDetails">
                            <div className={data[id].isOnline ?'onCircle' : 'ofCircle'}>
                             </div>
                             <p >{data[id].isOnline ? 'Online' : 'Offline'}</p>
                          </div>
                         <button className="callMe">Chamar</button>
                    </div>
                 </div>
            </div>
           
          </div>
        </>
    )
}