import React from 'react'
import ProjectCard from '../components/ProjectCard'
import GapSpacer from '../components/GapSpacer'
import projectItems from '../assets/projectsData.json'

const Projects = () => {
    return <div id="projects" className="projects">
          <GapSpacer height="6vh" />
          <div className="projects-banner">
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
}

export default Projects