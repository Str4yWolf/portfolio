import React, { useState } from 'react';
import './styles.scss';
import GapSpacer from './components/GapSpacer';
import ProjectCard from './components/ProjectCard';
import SocialLinkedIn from './assets/linkedin.svg';
import SocialGithub from './assets/github.svg';
import ProjectKanaSensei from './assets/kana-sensei.png';
import ProjectKoyoLearning from './assets/koyo-learning.png';
import ProjectStockhub from './assets/stockhub.png';
import ProjectWIP from './assets/wip.png';

const App = () => {

  const [showImprint, setShowImprint] = useState(false);

  const navItems = [{ title: 'Home', href: '#App' },
                    { title: 'About', href: '#specialization' },
                    { title: 'Projects', href: '#projects' },
                    { title: 'Social', href: '#footer' }];
  const projectItems = [{ image: ProjectWIP,
                          title: 'Web Development 2020',
                          description: 'A project focused on modern web development and program design patterns. The objective is to do freelance web development and build various web apps across several domains (e.g., educational, practical tools, small business solutions, ...).',
                          role: 'Front-end Developer, Web Designer, Back-end Developer',
                          tools: 'HTML5, CSS3, VanillaJS, React.js, Node.js, Express.js, SASS, MySQL',
                          demo: '',
                          code: '',
                          info: 'https://github.com/Str4yWolf/webdev2020',
                          meta: 'Learn and Develop; 2020' },
                          { image: ProjectStockhub,
                          title: 'Stockhub',
                          description: 'A finance platform that unites traders and people interested in stock trading. The aim is to create a scaleable platform with an optimized user experience.',
                          role: 'Front-end Developer, Management Team, Back-end Trainee, Late Co-founder',
                          tools: 'React.js, React Semantic UI, Node.js, Express.js, Confluence',
                          demo: '',
                          code: '',
                          info: 'https://www.stockhub.de/',
                          meta: 'Startup Project; Since December 2019' },
                        { image: ProjectKoyoLearning,
                          title: 'Koyo Learning',
                          description: 'A gamified remote learning platform to provide an immersive classroom experience. Hackathon idea to help provide education in times of physical social distancing. The goal was to come up with and pitch an actionable business solution while developing and demonstrating a working prototype.',
                          role: 'Research Analyst, Gamification Designer',
                          tools: 'Google Docs, AdobeXD',
                          demo: '',
                          code: '',
                          info: 'https://devpost.com/software/koyo-learning',
                          meta: 'EuVSVirus Hackathon; April 24 - 27, 2020' },
                          { image: ProjectKanaSensei,
                          title: 'Kana Sensei',
                          description: 'A gamified web app to help learn the Japanese phonetic script (Kana). The goal was to research how the use of game design elements affects learning. Key aspects were intuitive and minimalist design combined with UX design and learning theory (Spaced Repetition).',
                          role: 'Front-end Developer, UX / Gamification Designer, Researcher',
                          tools: 'Vue.js, Quasar, WordPress',
                          demo: 'https://str4ywolf.github.io/#/',
                          code: 'https://github.com/Str4yWolf/Gamification-of-Kana',
                          info: 'https://kanasensei.wordpress.com/',
                          meta: 'Bachelor\'s Project; April - October 2019' }]
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
            <i className="material-icons">code</i>
            <i className="material-icons">translate</i>
            <i className="material-icons">public</i>

          </p>
          
        </div>



        <div id="about-skills">
          <div id="div1">
              <i className="material-icons">blur_on</i>
              <span>
                <h2>Front-end development</h2>
                  I build themed websites with a focus on simple and interactive UX design. 
                  <br />
                  <br />
                  <strong>Main tools: </strong><span>HTML5, CSS3, SASS, VanillaJS / React.js, Interactive Design</span>
                </span>
            </div>
            <div id="div2">
              <i className="material-icons">emoji_objects</i>
              <span>
                <h2>Web app development</h2>
                  I design and develop web apps to solve simple or more complex tasks.
                  <br/ >
                  <br />
                  <strong>Main tools: </strong><span>React.js, Node.js, Functional Design, Learning Theory</span>
              </span>
            </div>
            <div id="div3">
              <i className="material-icons">school</i>
                <span>
                  <h2>Learning and research</h2>
                  I enjoy learning new technologies and doing research to help develop better products.
                    <br/ >
                  <br />
                  <strong>Main topics: </strong><span>Back-end Development, Programming to solve problems, Language Learning, Gamification</span>
                </span>
            </div>
        </div>

        
        <GapSpacer height="5vh" />

        <div id="projects" className="projects">
        <GapSpacer height="10vh" />
          <div id="projects-banner">
            <h1>Projects</h1>
          </div>
          <GapSpacer height="10vh" />

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
          <a href="https://www.linkedin.com/in/michael-woei-kang-huang/" target="_blank" rel="noopener noreferrer">
            <img 
              src={SocialLinkedIn} 
              alt="Michael Woei Kang Huang on LinkedIn"
              height="50vh"
              width="50vw"
            />
          </a>
          <a href="https://github.com/Str4yWolf" target="_blank" rel="noopener noreferrer">
            <img 
              src={SocialGithub} 
              alt="Michael Woei Kang Huang on Github"
              height="50vh"
              width="50vw"
            />
          </a>
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
