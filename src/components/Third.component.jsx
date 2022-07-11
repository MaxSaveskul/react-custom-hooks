import useFetch from '../hooks/useFetch';

const Third = () => {
	const [loading, data, error] = useFetch('https://swapi.dev/api/people/1/');

	const objOfData = { ...data };

	return (
		<div>
			{error}
			{loading ? <h2>Loading..</h2> : <div>{JSON.stringify(objOfData)}</div>}
		</div >
	)

}

export default Third;