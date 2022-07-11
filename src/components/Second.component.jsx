import React from 'react';
import useDevice from '../hooks/useDevice';

const Second = () => {
	const {
		isMobile,
		isTablet,
		isDesktop,
		isPrinting,
	} = useDevice();

	let show;

	if (isMobile) {
		show = 'Welcome from phone';
	} else if (isTablet) {
		show = 'Welcome from tablet';
	} else if (isDesktop) {
		show = 'Welcome from desktop';
	} else if (isPrinting) {
		show = 'printing';
	}

	return <h1>{show}</h1>
}

export default Second;