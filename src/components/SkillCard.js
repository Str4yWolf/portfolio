import React from 'react';
import MaterialIcon from './MaterialIcon';
import TagItem from './TagItem'

const SkillCard = ({iconName, header, description, tools, toolsLabel = 'Tags: ', colorClass=""}) => {

  let toolCategories = tools.split(";")

  // split tags semantically
  let tags = <span>
    { toolCategories[0].split(",").map((toolText, key) => {
      return <TagItem key={key} text={toolText} colorClass={colorClass} />
    }) }
    { toolCategories[1] && toolCategories[1].split(",").map((toolText, key) => {
      return <TagItem key={key} text={toolText} colorClass={colorClass} />
    }) }
  </span>
  return (
    <div className="skill-card">
      <MaterialIcon name={iconName} />

      <span>
        <h2>{ header }</h2>
        { description } 
        <br />
        <br />

        <strong>{ toolsLabel }</strong>
        { tags }
      </span>
    </div>
  );
}

export default SkillCard;
