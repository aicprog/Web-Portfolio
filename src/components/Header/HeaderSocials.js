import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

const HeaderSocials = ({footer}) => {
	return (
		<div className={`${footer ? 'footer-socials': 'header-socials'}`}>
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
