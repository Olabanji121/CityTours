import React, { Component } from 'react'
import logo from '../../logo.svg'
import './navbar.scss'
export default class NavBar extends Component {
    render() {
        return (
					<nav className='navbar'>
						<img src={logo} alt='city tour' />
						<ul className='nav-links'>
							<li>
								<a href='/' className='nav-link'>
									Home
								</a>
							</li>
							<li>
								<a href='/' className='nav-link'>
									About
								</a>
							</li>
							<li>
								<a href='/' className='nav-link active'>
									Tours
								</a>
							</li>
						</ul>
					</nav>
				);
    }
}
