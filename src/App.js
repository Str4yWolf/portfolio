import React from 'react';
import './styles.scss';

import Intro from './sections/Intro';
import Header from './sections/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Social from './sections/Social';

import GapSpacer from './components/GapSpacer';


const App = () => {

  const bottomText = <div className="outro">
    <p>Please see below for <strong>contact details</strong>.</p>
    <p>Thank you!</p>
  </div>

  const footerText = <>
    <sup>Portfolio v1.0.10 (Fall Colours)</sup>
    <br/>
    <sup>&copy; 2025, Michael Woei Kang Huang</sup>
  </>


  const decoration = <>
    <div id="block1" />
    <div id="block2" />
  </>

  const mainSection = <main>
    <Intro />
    <Header />
    <About />
    <Skills />

    <GapSpacer height="9vh" />

    <Projects />

    <GapSpacer height="15vh" />
    { bottomText }      
    <GapSpacer height="5vh" />
  </main>

  const footerSection = <footer id="footer" className="footer">
    <Social />
    <GapSpacer height="5vh" />
    { footerText }
  </footer>


  return (
    <div id="App" className="App">
      { decoration }
      { mainSection }
      { footerSection }
    </div>
  );
}

export default App;
