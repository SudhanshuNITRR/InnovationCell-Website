import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import PastEvents from './Components/Events/PastEvents';
import UpcomingEvents from './Components/Events/UpcomingEvents';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Components/ContactUs/ContactUs';
import Sponsors from './Components/Sponsors/Sponsors';
import MakerSpace from './Components/MakerSpace/MakerSpace';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Team />
    </div>
  );
}

export default App;