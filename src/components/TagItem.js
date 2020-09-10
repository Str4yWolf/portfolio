import React from 'react';
import '../styles.scss';

const TagItem = ({ text, alternate=false, colorClass="" }) => {

	let content;
	if (!alternate) {
		if (colorClass) {
			content = <div className={`tag-item ${colorClass}`}>
				{ text }
			</div>
		} else {
			content = <div className="tag-item">
				{ text }
			</div>
		}
	} else {
		content = <div className="tag-item alternate">
			{ text }
		</div>
	}
	return content;
};

export default TagItem;
