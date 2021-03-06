import React from 'react';
import './About.css';
import profile2 from '../../assets/profile2.jpg';
import { FaAward } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';
import { VscFolderLibrary } from 'react-icons/vsc';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import { VscFoldDown } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about-container">
				<div className="about-me">
					<div className="about-me-image">
						<img src={profile2} alt="about image" className="profile2" />
					</div>
				</div>
				<div className="about-content">
					<div className="about-cards">
						<article className="about-card">
							<FaAward className="about-icon" />
							<h5>Experience</h5>
							<small>with HTML5, CSS3, and Javascript </small>
						</article>
						<article className="about-card">
							<BsListCheck className="about-icon" />
							<h5>Skillset</h5>
							<small>
								Worked with various Frameworks & Libraries
								<ul className="skillset-list">
									<li>
										<VscDebugBreakpointDataUnverified /> ReactJS
									</li>
									<li>
										<VscDebugBreakpointDataUnverified />
										BootStrap
									</li>
									<li>
										<VscDebugBreakpointDataUnverified /> Styled Components
									</li>
									<li>
										<VscDebugBreakpointDataUnverified />
										TailwindCSS
									</li>
								</ul>
							</small>
						</article>
						<article className="about-card">
							<VscFolderLibrary className="about-icon" />
							<h5>Projects</h5>
							<small>Worked on multiple small and large projects</small>
							<br />
							<br />
							<a href="#projects">
								<small>See Projects</small> <br />
								<VscFoldDown />
							</a>
						</article>
					</div>
					<p className="card-description">
						I am a Los Angeles based front-end web developer who cares deeply
						about user experience and utilizing new technologies.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk!
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
