import { useState, useEffect } from 'react';

const useFetch = (link) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(link)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [link]);

	return [loading, data, error];
};

export default useFetch;