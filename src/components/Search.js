import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import shortenMobile from '../images/bg-shorten-mobile.svg';
import shortenDesktop from '../images/bg-shorten-desktop.svg';
import './Search.css';
function Search() {
	//tack user input
	const [currentLink, setCurrentLink] = useState('');
	//show links from API - array because response from api call returns multiple short URLs
	const [links, setLinks] = useState([]);
	const [error, setError] = useState(false);
	//store out API

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
					console.log('error getting the data');
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
					className={error ? 'error' : ''}>
					{/* <img
						src={shortenMobile}
						alt="background Image"
						className="shorten-mobile-BG"
						aria-hidden="true"
					/>
					<img
						src={shortenDesktop}
						alt="background Image"
						className="shorten-desktop-BG"
						aria-hidden="true"
					/> */}
					<div className="shorten__input">
						<input
							type="text"
							placeholder="Shorten a link here..."
							value={currentLink}
							onChange={handleChange}
						/>
						<p className="error">Please add a link</p>
					</div>
					<Button type="submit" className="shorten_it_button">
						Shorten It!
					</Button>
				</form>
				{links &&
					links.map((link, i) => (
						<div className="return__Result" key={i}>
							<h3 className="result__h3">{link['link']}</h3>
							<div className="">
								<a href={link['shortLink']} className="result_url">
									{link['shortLink']}
								</a>
								<button className="primary-btn">Copy</button>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}

export default Search;
