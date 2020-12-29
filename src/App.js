import './App.css';
import Menu from './Menu/Menu';
import Header from './components/header/Header';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Menu />
			<Header />
			<Search />
			<Footer />
		</div>
	);
}

export default App;
