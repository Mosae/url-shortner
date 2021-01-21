import React from 'react';
import Button from '@material-ui/core/Button';
import bgBoostDesktop from './bg-boost-desktop.svg';
import bgBoostMobile from './bg-boost-mobile.svg';
import './Boost.scss';

function Boost() {
	return (
		<section className="boosts">
			<img
				src={bgBoostDesktop}
				alt="background"
				className="desktop__background"
				aria-hidden="true"
			/>
			<img
				src={bgBoostMobile}
				alt="background"
				className="mobile__background"
				aria-hidden="true"
			/>
			<div className="container">
				<h2>Boost your links today</h2>
				<Button
					variant="contained"
					color="primary"
					className="shorten__it__button">
					Get Started!
				</Button>
			</div>
		</section>
	);
}

export default Boost;
