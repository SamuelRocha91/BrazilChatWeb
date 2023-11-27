import samuel from '../images/samuel.png'
import './about.css'

export default function About() {
    return(
        <div className='title'>
           <div className='edit'>
               <h1>Editor</h1>
           </div>
           <div className='person-edit'>
               <div className='text'>
                 <h2>Samuel Rocha</h2>
                 <p>Conheça mais do maluco beleza</p>
               </div>
               <div className='content-samuel'>
                  <img className='sam' src={samuel} alt="foto de perfil do autor" />
                </div>
            </div>
            <div className='social-media'>
                <a target="_blank" rel="noreferrer" href="https://github.com/SamuelRocha91"><i className="bi bi-github"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuel-soares-rocha-dev/"><i className="bi bi-linkedin"></i></a>
                <a target="_blank" rel="noreferrer" href="https://wa.me/5571992594946"><i className="bi bi-whatsapp"></i></a>
             </div>
        </div>
    )
}