import React from 'react';

const ProjectCard = ({ image, title, description, role, tools, demo='', code='', info='', date }) => {

    const imageSrc = image ? require(image) : '';



    const demoPart = demo ? <a href={demo} target="_blank">
    							<i class="material-icons" style={{color: 'green'}}>play_arrow</i>
    						</a> : <span />

    const codePart = code ? <a href={code} target="_blank">
    							<i class="material-icons" style={{color: 'purple'}}>code</i>
    						</a> : <span />

    const infoPart = info ? <a href={info} target="_blank">
    							<i class="material-icons" style={{color: 'orange'}}>launch</i>
    						</a> : <span />



    const top = <div className="top">
  			  	    <img src={imageSrc} />
  			    </div>

    const mainDesc = <div className="mainDesc">
  					<h3>{title}</h3>
  					<p>{description}</p>
  				</div>

    const mainInfo = <div className="mainInfo">
						<strong>Role: </strong>{role}
						<br />
						<strong>Tools: </strong>{tools}
				  	</div>

	const bottom = <div className="bottom">
						<span className="links">{ demoPart } { codePart } { infoPart }</span>
				  	  	<span className="date">Date: { date }</span>
				  	</div>

				  	

	return (<div className="project-card">
		{top}
		{mainDesc}
		{mainInfo}
		{bottom}
	</div>);
};

export default ProjectCard;
