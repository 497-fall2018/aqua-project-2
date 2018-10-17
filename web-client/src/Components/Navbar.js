import React, {Component} from 'react';
import '../styles/Navbar.css';
import { Navbar } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router'




class LandingNav extends Component {

	render() {
		return (
				<Navbar>
						<h2>FareShare</h2>
						<h4>Log In</h4>
				</Navbar>
			)
	}
}


export default LandingNav