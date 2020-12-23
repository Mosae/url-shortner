import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './Search.css';
function Search() {
	//tack user input
	const [inputURL, setInputURL] = useState('');
	//show links from API - array because response from api call returns multiple short URLs
	const [showLinks, setShowLinks] = useState([]);
	//store out API
	const API__URL = 'https://api.shrtco.de/v2/shorten?url=';
	//handleChanger function - handles events
	const handleChange = (e) => {
		setInputURL(e.target.value);
	};

	//need to handle what happens when a user submits
	useEffect(() => {
		axios
			.get(`${API__URL}`)
			.then((response) => {
				setInputURL(response.data);
				// console.log(
				// 	'This is the response',
				// 	response.data.result.full_short_link
				// );
			})
			.catch((error) => {
				console.log('There was a problem getting the data', error);
			});
	}, []);

	return (
		<div className="search__container">
			<input
				placeholder="Shorten a link here..."
				className="search__input"
				type="text"
				onChange={handleChange}
				value=""
			/>
			<Button variant="contained" color="primary" type="submit">
				Shorten URL
			</Button>
		</div>
	);
}

export default Search;
