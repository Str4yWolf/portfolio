import React, { useState } from 'react';
import './styles.scss';

import GapSpacer from './components/GapSpacer';
import MaterialIcon from './components/MaterialIcon';

import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import SocialItem from './components/SocialItem';

import skillItems from './assets/skillsData.json';
import projectItems from './assets/projectsData.json';
import socialItems from './assets/socialData.json';


const App = () => {

  const [showImprint, setShowImprint] = useState(false);

  const navItems = [{ title: 'Home', href: '#' },
                    { title: 'About', href: '#specialization' },
                    { title: 'Projects', href: '#projects' },
                    { title: 'Social', href: '#footer' }];

  const colorClasses = ["primary", "secondary", "tertiary"]

  return (
    <div id="App" className="App">


      <div id="block1" />
      <div id="block2" />



      <main>
        <div className="about">  
          <h2>To connect and grow through the web.</h2>
          <p>
             I create websites and web apps with user value and design thinking in mind. 
          </p>
          <p>
            To help people connect and achieve their goals better.
          </p>

          <a href="#specialization">
            <button>Learn more</button>
          </a>

        </div>



        <header id="home" className="home">
          <p className="home-portal">
            <a href="#">
              <span>M</span>
              <span>W</span>
              <span>K</span>
              <span>H</span>
            </a>
          </p>
          <nav>
            { navItems.map(item => <a href={item.href} onClick={item.scroll}>{ item.title }</a> ) }
          </nav>
        </header>



        <div id="specialization" className="specialization">

          <p className="about-me">
          <h1>Hey everyone, I'm Michael.</h1>
            <br />
              I've been a <strong>passionate web developer for 2 years</strong> and have a Computer Science background. My biggest fields of interest include productivity tools, e-learning, and information and communication platforms.
            <br />
            <br />
              I enjoy <strong>collaborating</strong> with different and diverse teams as they provide a great environment to exchange new ideas and grow one's field of vision.
            <br />
            <br />
              My vision is to <strong>contribute</strong> to human society as a driver of growth and also to encourage interdisciplinary and intercultural interaction, as I believe we can learn a lot from one another.
            <br />
            <br />
              In general, I'd describe myself as a passionate <strong>problem solver</strong> with a knack for cultures, languages, and travel. I also like to contemplate life and try to get the most out of it - e.g., through life hacks.
            <br />
            <br />

            <MaterialIcon name="code" />
            <MaterialIcon name="translate" />
            <MaterialIcon name="public" />

          </p>
          
        </div>



        <div id="about-skills">
            { skillItems.map((skill, index) => <SkillCard
                                        iconName={skill.iconName}
                                        header={skill.header}
                                        description={skill.description}
                                        tools={skill.tools}
                                        toolsLabel={skill.toolsLabel}
                                        colorClass={colorClasses[index]}
                                      />) }
        </div>

        

        <GapSpacer height="9vh" />

        <div id="projects" className="projects">
          <GapSpacer height="6vh" />
          <div id="projects-banner">
            <h1>Projects</h1>
          </div>

          { projectItems.map(project => <ProjectCard
                                          image={project.image}
                                          title={project.title}
                                          description={project.description}
                                          role={project.role}
                                          tools={project.tools}
                                          demo={project.demo}
                                          code={project.code}
                                          info={project.info}
                                          meta={project.meta}
                                        />) }
        </div>


        <GapSpacer height="15vh" />
        <p>Please see below for contact details.</p>
        <p>Thank you!</p>

        <GapSpacer height="10vh" />
        
        <span id="footer-line" />
        
        <GapSpacer height="10vh" />



        <div className="social">
          { socialItems.map(item => <SocialItem
                                      href={item.href}
                                      src={item.src}
                                      alt={item.alt}
                                    /> ) }
        </div>

      </main>



      <footer id="footer">
        <sup>Portfolio v1.0.1 (Fall Colours)</sup>
        <br/>
        <sup>&copy; 2020, Michael Woei Kang Huang</sup>

        <br />
        <sub
          id="imprint"
          onClick={() => setShowImprint(!showImprint)}
            >Imprint</sub>
        {
          showImprint && <div>
            <strong>Website run by:</strong><br />
            Michael Woei Kang Huang<br />
            Angerburger Str. 1<br />
            27356 Rotenburg<br />
            Germany<br/>
            <br />
            <strong>Email:</strong> huang@mwkhuang.com<br/>
            <br />
            <a href="#">mwkhuang.com</a> is a personal web developer portfolio website.
          </div>
        }
      </footer>
    </div>
  );
}

export default App;
