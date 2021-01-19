import Menu from './Menu/Menu';
import Header from './components/header/Header';
import Search from './components/Search';
import Cards from './components/cards/Card';
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
			<Footer />
		</div>
	);
}

export default App;
