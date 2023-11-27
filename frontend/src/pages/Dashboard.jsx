import './dashboard.css'
import NavLinks from '../components/NavLinks';
import ContentDash from '../components/ContentDash';
import BraSpeak from '../components/BraSpeak';
import About from '../components/About';
import Publicity from '../components/Publicity';

function Dashboard() {
    return (
      <div id='dash'>
        <NavLinks />
        <div className='main'>
          <main>
          <ContentDash />
          </main>
          <section>
            <BraSpeak />
            <About />
            <Publicity />
          </section>
        </div>
      </div>
    )
  }
  
export default Dashboard;
