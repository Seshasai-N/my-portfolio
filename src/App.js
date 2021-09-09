import './App.css';
import Navbar from './navbar'
import Intro from './Intro'
import Services from './services'
import Projects from './Projects'
import TechStack from './TechStack'
import Email from './Email'
import Footer from './Footer'

function App() {
    
  return (
    <div className="App">
     <Navbar />
     <Intro/>
     <Services/>
     <Projects/>
     <TechStack/>
     <Email/>
     <Footer/>
    </div>
  );
}

export default App;
