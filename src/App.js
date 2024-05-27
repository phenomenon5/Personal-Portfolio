import { Banner } from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
