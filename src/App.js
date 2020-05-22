import React from 'react';
import './styles.scss';
import GapSpacer from './components/GapSpacer';
import ProjectCard from './components/ProjectCard';
import SocialLinkedIn from './assets/linkedin.svg';
import SocialXing from './assets/xing.svg';
import SocialGithub from './assets/github.svg';

const App = () => {
  const navItems = [{ title: 'Home', href: '#home' },
                    { title: 'About', href: '#about' },
                    { title: 'Projects', href: '#projects' },
                    { title: 'Credits', href: '#credits' }];
  const projectItems = [{ image: '',
                          title: 'Koyo Learning',
                          description: 'A gamified classroom environment for interested people',
                          role: 'Research analysis',
                          tools: 'Google Docs',
                          demo: '',
                          code: '',
                          info: 'https://devpost.com/software/koyo-learning',
                          date: '2020' },
                          { image: '',
                          title: 'Stockhub',
                          description: 'A finance platform for traders',
                          role: 'Front-end developer, management team',
                          tools: 'React.js, Node.js, Confluence',
                          demo: '',
                          code: '',
                          info: 'https://stockhub.de/',
                          date: '2020' },
                          { image: '',
                          title: 'Feastbook',
                          description: 'A platform for ',
                          role: 'Front-end developer, management team',
                          tools: 'React.js, Node.js, Confluence',
                          demo: '',
                          code: '',
                          info: 'https://stockhub.de/',
                          date: '2020' },
                          { image: '',
                          title: 'Kana Sensei',
                          description: 'A gamified web app to learn the Japanese phonetic script (Kana). A Bachelor\'s project preceded by research and followed by user evaluations.',
                          role: 'Front-end developer, UX / gamification designer, researcher',
                          tools: 'Vue.js, Wordpress',
                          demo: 'https://str4ywolf.github.io/#/',
                          code: 'https://github.com/Str4yWolf/Gamification-of-Kana',
                          info: 'https://kanasensei.wordpress.com/',
                          date: '2020' }]
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
            Hello there. My name is Michael and I'm a passionate web developer. Currently, I'm doing front-end development <strong>(HTML/JS/CSS) + ReactJS</strong>. Also learning full-stack <strong>(Node.js, Express.js, MySQL)</strong> to be able to build and host full-fledged website. 
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
                                          date={project.date}
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
