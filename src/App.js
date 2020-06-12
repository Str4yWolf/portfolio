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



  return (
    <div id="App" className="App">


      <div id="block1" />
      <div id="block2" />



      <main id="about">
        <div className="about">  
          <h2>Intuitive and user-friendly web apps augmented with functional design.</h2>
          <p>
             An aspiring web developer with a passion for building educational apps and little tools to help you achieve your goal. 
          </p>

          <a href="#specialization">
            <button>Learn more</button>
          </a>

        </div>



        <header id="home" className="home">
          <nav>
            { navItems.map(item => <a href={item.href} onClick={item.scroll}>{ item.title }</a> ) }
          </nav>
        </header>



        <div id="specialization" className="specialization">

          <p className="about-me">
          <h1>Hey there, I'm Michael.</h1>
            <br />
            I have discovered my passion for web development last year while doing my Bachelor's project. I've since gained practical experience in developing and maintaining front-ends for small and agile projects. My main focuses are single-page and web apps, as well as e-learning and gamification.
            <br />
            <br />
            Besides programming, I enjoy learning languages, different cultures, and travel.
            <br />
            <br />

            <MaterialIcon name="code" />
            <MaterialIcon name="translate" />
            <MaterialIcon name="public" />

          </p>
          
        </div>



        <div id="about-skills">
            { skillItems.map(skill => <SkillCard
                                        iconName={skill.iconName}
                                        header={skill.header}
                                        description={skill.description}
                                        tools={skill.tools}
                                        toolsLabel={skill.toolsLabel}
                                      />) }
        </div>

        

        <GapSpacer height="15vh" />

        <div id="projects" className="projects">
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
        <p>Would be happy to get in touch with you!</p>

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
        <sup>&copy; 2020, Michael Woei Kang Huang</sup>

        <br />
        <sub
          id="imprint"
          onClick={() => setShowImprint(!showImprint)}
            >Imprint</sub>
        {
          showImprint && <div>
            Angerburger Str. 1<br />
            27356 Rotenburg<br />
            Germany
          </div>
        }
      </footer>
    </div>
  );
}

export default App;
