import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import illustration from './illustration-working.svg';
function Header() {
	return (
		<div className="header__intro">
			<h1>
				More than just <br />
				shorter links
			</h1>
			<h2>
				Build your brand's recoginition and get detailed <br />
				insights on how your links are performing.
			</h2>
			<Button>Get Started</Button>
			<img src={illustration} alt="Shortly" />
		</div>
	);
}

export default Header;
