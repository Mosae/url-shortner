import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import illustration from './illustration-working.svg';
function Header() {
	return (
		<div className="header__intro">
			<div className="header__info">
				<h3 className="font-bold text-5xl sm:text-3xl">
					More than just <br />
					shorter links
				</h3>
				<h2 className="mb-3">
					Build your brand's recoginition and get detailed <br />
					insights on how your links are performing.
				</h2>
				<Button variant="contained" color="primary" class="get__started__button  mr-4 text-white p-3 w-40 rounded-3xl">
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
