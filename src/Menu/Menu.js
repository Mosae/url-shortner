import React from 'react';
import logo from '../images/logo.svg';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Menu.css';

export default function Menu() {
	return (
		<div className="header">
			<Toolbar>
				<div className="header__logo">
					<img src={logo} alt="Shortly" />
				</div>
				<div className="header__ul invisible md:visible">
					<div className="header__nav ">
						<Typography variant="h6" className="menu__items">
							Features
						</Typography>
						<Typography variant="h6" className="menu__items">
							Pricing
						</Typography>
						<Typography variant="h6" className="menu__items">
							Resources
						</Typography>
					</div>
				</div>
				<div className="header__login invisible md:visible">
					<Button color="inherit">Login</Button>
					<Button variant="contained" color="primary">
						Sign Up
					</Button>
				</div>
			</Toolbar>
		</div>
	);
}
