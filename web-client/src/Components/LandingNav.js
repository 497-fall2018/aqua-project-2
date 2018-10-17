import React, {Component} from 'react';
import '../styles/LandingNav.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router'




class LandingNav extends Component {

	render() {
		const {history} = this.props;
		return (
				<Navbar className="navbar">
					<Navbar.Header>
							<h2><a className="navbar-text header">FareShare</a></h2>
					</Navbar.Header>

				</Navbar>
			)
	}
}


export default LandingNav