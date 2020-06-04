import React from 'react';
import '../styles.scss';

const TagItem = ({ text, alternate=false }) => {

	let content;
	if (!alternate) {
		content = <div className="tag-item">
			{ text }
		</div>
	} else {
		content = <div className="tag-item alternate">
			{ text }
		</div>
	}
	return content;
};

export default TagItem;
