import React from 'react';
import './About.css';
import profile2 from '../../assets/aboutme.jpg';
import { FaAward } from 'react-icons/fa';
import { BsListCheck } from 'react-icons/bs';
import { VscFolderLibrary } from 'react-icons/vsc';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import { VscFoldDown } from 'react-icons/vsc';
import { IoIosReturnRight } from 'react-icons/io';
import resume from '../../assets/resume.pdf';

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
							<div className="about-card-content">
								<small>
									<p className="about-card-point">
										TimeDoc Health (06/2022 - 07/2022)
									</p>
									<ul className="bulletpoint-list">
										<li>
											<VscDebugBreakpointDataUnverified /> Remote Software
											Engineer
										</li>
										<li>
											<VscDebugBreakpointDataUnverified /> Worked with React,
											CoffeeScript/Hamlc, SASS, Cypress, JEST
										</li>
									</ul>
									<p className="about-card-point">
										LA Metro (11/2019 - 04/2021)
									</p>
									<ul className="bulletpoint-list">
										<li>
											<VscDebugBreakpointDataUnverified /> Administrative Intern
										</li>
										<li>
											<VscDebugBreakpointDataUnverified /> Facilitated the
											workload of 10 electrical/mechanical engineers by
											compiling information from image files, decreasing search
											time by 90%
										</li>
									</ul>
								</small>
							</div>
							<div></div>
							<a href={resume} download className="btn btn-sm">
								<IoIosReturnRight />
								Full Resume
							</a>
						</article>
						<article className="about-card">
							<BsListCheck className="about-icon" />
							<h5>Skillset</h5>
							<small>
								<div className="about-card-content">
									<p className="about-card-point">Languages </p>
									<ul className="bulletpoint-list">
										<li>
											<VscDebugBreakpointDataUnverified /> HTML
										</li>
										<li>
											<VscDebugBreakpointDataUnverified />
											CSS
										</li>
										<li>
											<VscDebugBreakpointDataUnverified /> JS
										</li>
										<li>
											<VscDebugBreakpointDataUnverified />
											SASS
										</li>
									</ul>
								</div>
							</small>
							<small>
								<div className="about-card-content">
									<p className="about-card-point">Frameworks & Libraries</p>
									<ul className="bulletpoint-list">
										<li>
											<VscDebugBreakpointDataUnverified /> ReactJS
										</li>
										<li>
											<VscDebugBreakpointDataUnverified /> NextJS
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
								</div>
							</small>
							<small>
								<div className="about-card-content">
									<p className="about-card-point">Tools</p>
									<ul className="bulletpoint-list">
										<li>
											<VscDebugBreakpointDataUnverified /> Git / GitHub
										</li>
										<li>
											<VscDebugBreakpointDataUnverified />
											Bitbucket
										</li>
										<li>
											<VscDebugBreakpointDataUnverified /> Zendesk
										</li>
										<li>
											<VscDebugBreakpointDataUnverified />
											Sentry
										</li>
										<li>
											<VscDebugBreakpointDataUnverified />
											JIRA
										</li>
									</ul>
								</div>
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
