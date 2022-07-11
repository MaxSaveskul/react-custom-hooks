import './App.css';
import First from './components/First.component.jsx';
import Second from './components/Second.component.jsx';
import Third from './components/Third.component'

function App() {
	return (
		<>
			<div className="App">
				<p>Сustom hooks "useMedia" and "useDevice" say:</p>
				<First />
				<Second />
			</div>
			<div className="App">
				<div style={{ wordWrap: 'break-word' }}>
					<p>Custom hook "useFetch" gives us:</p>
					<Third />
				</div>
			</div>
		</>
	);
}

export default App;
