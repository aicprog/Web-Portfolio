import React from 'react';
import './Header.css';
import resume from '../../assets/resume.pdf';
import profile from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';
import { VscFoldDown } from 'react-icons/vsc';

const Header = () => {
	return (
		<header>
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Adriany Cocom</h1>
				<h5 className="text-light">Front End Web Developer</h5>
				{/* buttons */}
				<div className="cta">
					<a href={resume} download className="btn btn-title">
						Download Resume
					</a>
					<a href="#contact" className="btn btn-primary">
						Let's Talk!
					</a>
				</div>
				{/* img */}
				<div className="profile-img">
					<img src={profile} alt="profile" />
				</div>

				<a href="#contact" className="scroll-down">
					Scroll Down <VscFoldDown className="scroll-arrow" />
				</a>
				<HeaderSocials footer={false} />
			</div>
		</header>
	);
};

export default Header;
