import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import WhatIBuild from './components/WhatIBuild.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Skills />
        <Timeline />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
