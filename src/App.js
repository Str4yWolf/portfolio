import React from 'react';
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



      <main id="about">
        <div className="about">  
          <h2>Intuitive and user-friendly web apps augmented with functional design.</h2>
          <p>
             I'm an aspiring web developer with a passion for building educational apps and little tools to help you achieve your goal. 
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
          <span className="specialization-banner" />
          <GapSpacer height="6vh" />
          <h1>What I do</h1>
          <div className="grid">
            <span>
              <h2>Front-end development</h2>
              <p>
                Themed websites with a focus on simple, interactive UX design. 
              </p>
              <br />
              <p>
                <h4>Main tools</h4>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 / SASS</li>
                  <li>VanillaJS / React.js</li>
                  <li>Interactive design</li>
                </ul>
              </p>
            </span>
            <span>
              <h2>Web app development</h2>
              <p>
                Web app tools to solve simple or more complex tasks.
              </p>
              <br />
              <p>
                <h4>Main tools</h4>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Functional design</li>
                  <li>Learning theory</li>
                </ul>
              </p>
            </span>
            <span>
              <h2>Learning and research</h2>
              <p>
                I enjoy learning new technologies and doing research to help develop better products.
              </p>
              <p>
                <h4>Main interests</h4>
                <ul>
                  <li>Back-end development</li>
                  <li>Programming to solve problems</li>
                  <li>Language learning</li>
                  <li>Gamification</li>
                </ul>
              </p>
            </span>
          </div>
        </div>

        <GapSpacer height="25vh" />

        <div id="projects" className="projects">
        <GapSpacer height="10vh" />
          <h1>Projects</h1>

          <GapSpacer height="5vh" />

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

        <GapSpacer height="45vh" />
        <p>Would be happy to get in touch with you!</p>

        <GapSpacer height="10vh" />
        
        <div className="social">
          <a href="https://www.linkedin.com/in/michael-woei-kang-huang-274631194/" target="_blank" rel="noopener noreferrer">
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
      </footer>
    </div>
  );
}

export default App;
