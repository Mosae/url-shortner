import './App.css';
import Menu from './Menu/Menu';
import Header from './components/header/Header';
import Search from './components/Search';

function App() {
	return (
		<div className="App">
			<Menu />
			<Header />
			<Search />
		</div>
	);
}

export default App;
