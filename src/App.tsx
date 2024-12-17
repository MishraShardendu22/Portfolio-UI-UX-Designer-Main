import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/ContactMe';
import About from './components/About';
import Home from './components/Home';
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Home />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;