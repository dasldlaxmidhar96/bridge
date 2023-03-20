import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { About } from './NavTabs/About';
import Contact from './NavTabs/Contact';
import Home from './NavTabs/Home';
import Ratings from './NavTabs/Ratings';
import Review from './NavTabs/Review';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
