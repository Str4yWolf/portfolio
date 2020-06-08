import React from 'react';
import '../styles.scss';

const TagEnumerator = ({ text, nAry }) => {

	const getTag = (item, key) => {
		switch (nAry) {
			case 'primary':
				return <span key={key} className="tag-enumerator primary">{ item }</span>
			case 'secondary':
				return <div key={key} className="tag-enumerator secondary">{ item }</div>
			case 'tertiary':
				return <div key={key} className="tag-enumerator tertiary">{ item }</div>
			default:
				return <div />
		}
	}

	const tags = text.split(',').map((item, key) => getTag(item, key));

	const content = <div>
			{ tags }
	</div>

	return content;
};

export default TagEnumerator;
