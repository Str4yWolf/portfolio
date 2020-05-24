import React from 'react';
import './styles.scss';
import GapSpacer from './components/GapSpacer';
import ProjectCard from './components/ProjectCard';
import SocialLinkedIn from './assets/linkedin.svg';
import SocialXing from './assets/xing.svg';
import SocialGithub from './assets/github.svg';
import ProjectKanaSensei from './assets/kana-sensei.png';
import ProjectKoyoLearning from './assets/koyo-learning.png';

const App = () => {
  const navItems = [{ title: 'Home', href: '#home' },
                    { title: 'About', href: '#about' },
                    { title: 'Projects', href: '#projects' },
                    { title: 'Credits', href: '#credits' }];
  const projectItems = [{ image: '',
                          title: 'Web Development 2020',
                          description: 'A project to learn modern web development and improve programming skills. Includes acquiring design patterns by studying existing websites, creating own designs, building mini tools (e.g., unit converter), and building templates. The goal is to get skilled in freelance web development and get started with building user-friendly and scaleable web apps.',
                          role: 'Front-end developer, web designer, back-end developer',
                          tools: 'HTML5, CSS3, VanillaJS, React.js, Node.js, Express.js, SASS, MySQL',
                          demo: '',
                          code: '',
                          info: '',
                          meta: 'Learn and Develop; 2020' },
                          { image: 'https://www.stockhub.de/images/6925c4434ea8ac9fb0ab5797963355d4-logo_white.png',
                          title: 'Stockhub',
                          description: 'A finance platform for traders and people interested in stock trading. The aim is to create a scaleable platform with an optimized user experience.',
                          role: 'Front-end developer, management team, back-end trainee, late co-founder',
                          tools: 'React.js, React Semantic UI, Node.js, Express.js, Confluence',
                          demo: '',
                          code: '',
                          info: 'https://www.stockhub.de/',
                          meta: 'Startup Project; Since December 2019' },
                        { image: ProjectKoyoLearning,
                          title: 'Koyo Learning',
                          description: 'A gamified remote learning platform geared toward middle schoolers to help provide an immersive classroom experience. Hackathon idea to address the challenge of keeping up education in times of physical social distancing. The goal was to come up with and pitch an actionable business solution while developing and demonstrating a working prototype at the same time.',
                          role: 'Research analyst, gamification designer',
                          tools: 'Google Docs, AdobeXD',
                          demo: '',
                          code: '',
                          info: 'https://devpost.com/software/koyo-learning',
                          meta: 'EuVSVirus Hackathon; April 24 - 27, 2020' },
                          { image: ProjectKanaSensei,
                          title: 'Kana Sensei',
                          description: 'A gamified web app to learn the Japanese phonetic script (Kana). A Bachelor\'s project preceded by research and followed by user evaluations. The goal was to research how the use of game design elements affects user learning experience. Key aspects were intuitive and minimalist design coupled together with learning guidance (explore, learn, test) and learning theory (Spaced Repetition).',
                          role: 'Front-end developer, UX / gamification designer, researcher',
                          tools: 'Vue.js, Quasar, WordPress',
                          demo: 'https://str4ywolf.github.io/#/',
                          code: 'https://github.com/Str4yWolf/Gamification-of-Kana',
                          info: 'https://kanasensei.wordpress.com/',
                          meta: 'Bachelor\'s Project; April - October 2019' }]
  return (
    <div className="App">
      <header id="home" className="home">
        <nav>
          { navItems.map(item => <a href={item.href}>{ item.title }</a> ) }
        </nav>
      </header>

      <GapSpacer height="50vh" />

      <main id="about">
        <div className="about">  
          <h2>About</h2>
          <p>
            Hey there! My name is Michael and I'm an aspiring web developer. Currently, I'm doing front-end development <strong>(HTML/JS/CSS) + ReactJS</strong>. Also learning full-stack <strong>(Node.js, Express.js, MySQL)</strong> to be able to build and host full-fledged website. 
          </p>
        </div>

        <GapSpacer height="15vh" />

        <div className="social">
          <a href="https://www.linkedin.com/in/michael-woei-kang-huang-274631194/" target="_blank">
            <img 
              src={SocialLinkedIn} 
              alt="Michael Woei Kang Huang on LinkedIn"
              height="50vh"
              width="50vw"
            />
          </a>
          <a href="https://www.xing.com/profile/MichaelWoeiKang_Huang/cv" target="_blank">
            <img 
              src={SocialXing} 
              alt="Michael Woei Kang Huang on XING"
              height="50vh"
              width="50vw"
            />
          </a>
          <a href="https://github.com/Str4yWolf" target="_blank">
            <img 
              src={SocialGithub} 
              alt="Michael Woei Kang Huang on Github"
              height="50vh"
              width="50vw"
            />
          </a>
        </div>

        <GapSpacer height="15vh" />

        <div id="projects" className="projects">

          <h2>Projects</h2>

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
      </main>

      <GapSpacer height="50vh" />

      <footer id="credits">
        <h2>Icon credits</h2>
        <strong>LinkedIn: </strong><span>Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
        <br />
        <strong>XING: </strong><span>Icon made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
        <br />
        <strong>Github: </strong><span>Icon made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
        <br />

        <GapSpacer height="10vh" />

        <sub>&copy; 2020, Michael Woei Kang Huang. All rights reserved.</sub>      
      </footer>
    </div>
  );
}

export default App;
