import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './Search.css';
function Search() {
	useEffect(() => {
		axios
			.get(
				'https://api.shrtco.de/v2/shorten?url=google.com/very/long/link.html'
			)
			.then((response) => {
				console.log('This is the response', response.data);
			})
			.catch((error) => {
				console.log('There was a problem getting the data', error);
			});
	}, []);
	return (
		<div className="search__container">
			<input className="search__input" type="text" />
			<Button>Shorten URL</Button>
		</div>
	);
}

export default Search;
