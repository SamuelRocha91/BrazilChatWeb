import teacher from '../images/studies.png'
import start from '../images/start.png';
import { useHistory } from 'react-router-dom';
import './beTeacher.css'

export default function BeTeacher() {
  const navigate = useHistory();

  return (
    <>
      <h1>Candidate-se como um professor(a)!</h1>
      <div className='teacher-signup' id='teacher'>
          <img src={teacher} alt="teacher" />
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit lorem, vestibulum sed urna at, facilisis accumsan arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum est sit amet lacus lobortis condimentum. Suspendisse consectetur, metus eget eleifend volutpat, elit turpis viverra urna, a luctus neque urna et dui. Sed imperdiet a leo lobortis fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <button  onClick={ () => navigate.push('/login') }>Começar<img src={start} alt="inicio" />
              </button>
          </div>
      </div>
    </>
  )
}