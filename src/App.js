import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './Pages/Weather';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import StarWar from './Pages/StarWar';
import ChatApp from './Pages/ChatApp';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="/starwar" element={<StarWar />} />
        <Route exact path="/chatapp" element={<ChatApp />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
