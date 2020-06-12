import React from 'react';

const SocialItem = ({ href, src, alt }) => {

 	return <a href={href} target="_blank" rel="noopener noreferrer">
		        <img 
		          src={ require(`../assets/${src}`) } 
		          alt={alt}
		          height="50vh"
		          width="50vw"
		        />
		    </a>   
}

export default SocialItem;
