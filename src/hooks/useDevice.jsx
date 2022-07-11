import useMedia from './useMedia';

const useDevice = () => {
	const isMobile = useMedia('(max-width: 720px');
	const isTablet = useMedia('(min-width: 721px) and (max-width: 1200px)');
	const isDesktop = useMedia('(min-width: 1201px)');

	return { isMobile, isTablet, isDesktop };
};

export default useDevice;