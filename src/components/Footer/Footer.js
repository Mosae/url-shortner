import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
	return (
		<div className="footer__items ">
			<div className="footer__heading m-11">
				<nav>
					<h2 className="mb-3">Shortly by Mosae S Litsoane</h2>
					<div className="footer__subheading">
						<a href="https://www.linkedin.com/in/mosae-litsoane/" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a href="https://github.com/Mosae" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
						<a href="https://twitter.com/Mosae_Litsoane" target="_blank" rel="noopener noreferrer">
							<FaTwitter />
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
