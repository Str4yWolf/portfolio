import React from 'react'
import SkillCard from '../components/SkillCard'
import skillItems from '../assets/skillsData.json';

const Skills = () => {
    const colorClasses = ["primary", "secondary", "tertiary"]
    
    return <div id="skills" className="skills">
        { skillItems.map((skill, index) => <SkillCard
                                    iconName={skill.iconName}
                                    header={skill.header}
                                    description={skill.description}
                                    tools={skill.tools}
                                    toolsLabel={skill.toolsLabel}
                                    colorClass={colorClasses[index]}
                                    />) }
    </div>
}

export default Skills