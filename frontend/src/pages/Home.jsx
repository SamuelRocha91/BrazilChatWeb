import FindTeacher from '../components/FindTeacher';
import BeTeacher from '../components/BeTeacher';
import Header from '../components/Header';
import LearnPortuguese from '../components/LearnPortuguese';
import './home.css'

function Home() {

    return (
      <>
        <div className='home'>
          <header className='home-header'>
            <Header className='element-header'/>
          </header>
          <main className='learn'>
            <LearnPortuguese />
          </main>
        </div>
        <section className='findTeacher'>
          <FindTeacher />
        </section>
        <section className='beTeacher'>
          <BeTeacher />
        </section>
      </>
    )
  }
  
export default Home;