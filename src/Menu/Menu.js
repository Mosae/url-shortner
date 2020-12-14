import React from 'react';
import logo from '../images/logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Menu.css';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));

export default function Menu() {
	//const classes = useStyles();

	return (
		<div className="header">
			<Toolbar>
				<div className="header__ul">
					<div className="header__logo">
						<img src={logo} alt="Shortly" />
					</div>
					{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
					<div className="header__nav">
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
				<div className="header__login">
					<Button color="inherit">Login</Button>
					<Button variant="contained" color="primary">
						Sign Up
					</Button>
				</div>
			</Toolbar>
		</div>
	);
}
