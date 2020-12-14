import React from 'react';
import Button from '@material-ui/core/Button';
import './Search.css';
function Search() {
	return (
		<div className="search__container">
			<input className="search__input" type="text" />
			<Button>Shorten URL</Button>
		</div>
	);
}

export default Search;
