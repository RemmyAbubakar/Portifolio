
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portifolio from './components/portifolio/Portifolio';
import Qualification from './components/qualifications/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portifolio />
        <Qualification />
        <Contact />
      </main>


      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
