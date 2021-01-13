import React, { useState } from 'react';
import shortenMobile from '../images/bg-shorten-mobile.svg';
import shortenDesktop from '../images/bg-shorten-desktop.svg';
import './_search.scss';
function Search() {
	//tack user input
	const [currentLink, setCurrentLink] = useState('');
	//show links from API - array because response from api call returns multiple short URLs
	const [links, setLinks] = useState([]);
	const [error, setError] = useState(false);
	//store out API
	const [clicked, setClick] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`https://api.shrtco.de/v2/shorten?url=${currentLink}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.ok) {
					setLinks([
						...links,
						{ link: currentLink, shortLink: data.result['full_short_link2'] },
					]);
					console.log(links);
					setCurrentLink('');
				} else {
					//alert('Please enter a valid URL');
					setError(true);
				}
			})
			.catch(() => {
				console.log('error getting the info');
				setError(true);
			});
	};
	const handleChange = (e) => {
		setCurrentLink(e.target.value);
	};

	return (
		<section className="shorten">
			<div className="search__container">
				<form
					action=""
					onSubmit={handleSubmit}
					className={error ? 'error' : ''}
					onFocus={() => setError(false)}>
					{/* <img
						src={shortenMobile}
						alt="background"
						className="shorten-mobile-BG"
						aria-hidden="true"
					/> */}
					<img
						src={shortenDesktop}
						alt="background"
						className="shorten-desktop-BG"
						aria-hidden="true"
					/>
					<div className="shorten__input">
						<input
							type="text"
							placeholder="Shorten a link here..."
							value={currentLink}
							onChange={handleChange}
							aria-label="shorten-link"
						/>
						<p className="error-message">Please add a link</p>
					</div>
					<input
						type="submit"
						className="secondary_it_button"
						value="Shorten It!"
					/>
				</form>
				{links && links.map((link, i) => <Result link={link} id={i} />)}
			</div>
		</section>
	);
}

const Result = ({ link, i }) => {
	function copyToClipboard(e) {
		navigator.clipboard.writeText(link['shortLink']);
		e.target.focus();
	}

	return (
		<div className="return_result" key={i}>
			<h3 className="result__heading">{link['link']}</h3>
			<div className="">
				<a href={link['shortLink']} className="result__url">
					{link['shortLink']}
				</a>
				<button className="secondary-btn" onClick={copyToClipboard}>
					<span className="copy">Copy</span>
					<span className="copied">Copied!</span>
				</button>
			</div>
		</div>
	);
};

export default Search;
