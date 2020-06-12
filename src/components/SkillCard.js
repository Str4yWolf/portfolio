import React from 'react';
import MaterialIcon from './MaterialIcon';

const SkillCard = ({iconName, header, description, tools, toolsLabel = 'Tags: '}) => {

  return (
    <div className="skill-card">
      <MaterialIcon name={iconName} />

      <span>
        <h2>{ header }</h2>
        { description } 
        <br />
        <br />

        <strong>{ toolsLabel }</strong><span>{ tools }</span>
      </span>
    </div>
  );
}

export default SkillCard;
