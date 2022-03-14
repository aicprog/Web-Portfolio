import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { MdChecklistRtl } from 'react-icons/md';

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('#');

	const handleClick = (type) => {
		switch (type) {
			case '#':
				setActiveNav('#');
				break;
			case 'about':
				setActiveNav('about');
				break;
			case 'experience':
				setActiveNav('experience');
				break;
			case 'projects':
				setActiveNav('projects');
				break;
			case 'certificates':
				setActiveNav('certificates');
				break;
			case 'contact':
				setActiveNav('contact');
				break;

			default:
				break;
		}
	};
	return (
		<nav>
			<a
				href="#"
				className={activeNav === '#' ? 'active' : ''}
				onClick={() => handleClick('#')}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				className={activeNav === 'about' ? 'active' : ''}
				onClick={() => handleClick('about')}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				className={activeNav === 'experience' ? 'active' : ''}
				onClick={() => handleClick('experience')}
			>
				<MdChecklistRtl />
			</a>
			<a href="#projects" className={activeNav === 'projects' ? 'active' : ''}>
				<AiOutlineFundProjectionScreen
					onClick={() => handleClick('projects')}
				/>
			</a>
			<a
				href="#certificates"
				className={activeNav === 'certificates' ? 'active' : ''}
				onClick={() => handleClick('certificates')}
			>
				<BiBook />
			</a>
			<a
				href="#contact"
				className={activeNav === 'contact' ? 'active' : ''}
				onClick={() => handleClick('contact')}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Navbar;
