import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import illustration from './illustration-working.svg';
function Header() {
	return (
		<div className="header__intro">
			<div className="header__info">
				<h1>
					More than just <br />
					shorter links
				</h1>
				<h2>
					Build your brand's recoginition and get detailed <br />
					insights on how your links are performing.
				</h2>
				<Button
					variant="contained"
					color="primary"
					className="get__started__button">
					Get Started
				</Button>
			</div>
			<div className="header__image">
				<img src={illustration} alt="Shortly" />
			</div>
		</div>
	);
}

export default Header;
