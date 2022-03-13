import React from 'react';
import './Header.css';
import resume from '../../assets/resume.pdf';
import profile from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';
import { VscFoldDown } from 'react-icons/vsc';

const Header = () => {
	return (
		<header>
			<ul className="background">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Adriany Cocom</h1>
				<h5 className="text-light">Front End Web Developer</h5>
				{/* buttons */}
				<div className="cta">
					<a href={resume} download>
						<button className="btn">Download Resume</button>
					</a>
					<a href="#contact">
						<button className="btn btn-primary">Let's Talk!</button>
					</a>
				</div>
				{/* img */}
				<div className="profile-img">
					<img src={profile} alt="profile" />
				</div>

				<a href="#contact" className="scroll-down">
					Scroll Down <VscFoldDown className="scroll-arrow" />
				</a>
				<HeaderSocials />
			</div>
		</header>
	);
};

export default Header;
