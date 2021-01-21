import Menu from './Menu/Menu';
import Header from './components/header/Header';
import Search from './components/Search';
import Cards from './components/cards/Card';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer';
import './style.css';
// import Advanced from './components/Advanced';

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
