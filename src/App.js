import Menu from './Menu/Menu';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Cards from './components/Cards/Card';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import './style.css';

function App() {
	return (
		<div className="App">
			<Menu />
			<Header />
			<Search />
			<Cards />
			<Boost />
			<Footer />
		</div>
	);
}

export default App;
