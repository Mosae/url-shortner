/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const MobileMenu = () => {
	return (
		<div className="nav__mobileMenu">
			<button>Open</button>
			<nav className="mobile__menu">
				<ul className="mobile__menu__list">
					<li className="mobile__menu__item">
						<a href="#" className="menu__link">
							Features
						</a>
					</li>
					<li className="mobile__menu__item">
						<a href="#" className="menu__link">
							Pricing
						</a>
					</li>
					<li className="mobile__menu__item">
						<a href="#" className="menu__link">
							Resources
						</a>
					</li>
					<li className="mobile__menu__item">
						<a href="#" className="menu__link">
							Login
						</a>
						<li className="mobile__menu__item">
							<a href="#" className="menu__link btn">
								Sign Up
							</a>
						</li>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileMenu;
