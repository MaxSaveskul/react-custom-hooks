import React from 'react';
import useMedia from '../hooks/useMedia';

const First = () => {
	const matches = useMedia('(min-width: 720px)');

	return (
		<div>
			{`Your screen is ${matches ? 'bigger than' : 'smaller than'} 720px wide`}
		</div>
	);
};

export default First;