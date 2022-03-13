import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

const HeaderSocials = () => {
	return (
		<div className="header-socials">
			<a href="https://www.linkedin.com/in/acocom/" target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/aicprog" target="_blank">
				<FaGithub />
			</a>
			<a href="" target="_blank">
				<IoLogoInstagram />
			</a>
		</div>
	);
};

export default HeaderSocials;
