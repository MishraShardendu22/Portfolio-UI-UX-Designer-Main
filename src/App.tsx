import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/about-me" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
