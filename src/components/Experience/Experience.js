import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { DiFirebase, DiReact, DiHtml5, DiCss3, DiPython } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { CgStyle } from 'react-icons/cg';

const Experience = () => {
	return (
		<section id="experience">
			<h5>Skillset</h5>
			<h2>My Experience</h2>
			<div className="container experience-container">
				<div className="experience-frontend experience-card">
					<h3 className="experience-card-header">Frontend Development</h3>
					<div className="experience-content">
						<article className="experience-details">
							<DiHtml5 className="experience-details-icon" />
							<div>
								<h4>HTML5</h4>
							</div>
						</article>
						<article className="experience-details">
							<DiCss3 className="experience-details-icon" />
							<div>
								<h4>CSS3</h4>
							</div>
						</article>
						<article className="experience-details">
							<IoLogoJavascript className="experience-details-icon" />
							<div>
								<h4>Javascript</h4>
							</div>
						</article>
						<article className="experience-details">
							<DiReact className="experience-details-icon" />
							<div>
								<h4>ReactJS</h4>
							</div>
						</article>
						<article className="experience-details">
							<DiReact className="experience-details-icon" />
							<div>
								<h4>NextJS</h4>
							</div>
						</article>
						<article className="experience-details">
							<CgStyle className="experience-details-icon" />
							<div>
								<h4>
									Styled <br /> Components
								</h4>
							</div>
						</article>
						<article className="experience-details">
							<BsBootstrap className="experience-details-icon" />
							<div>
								<h4>BootStrap</h4>
							</div>
						</article>
						<article className="experience-details">
							<SiTailwindcss className="experience-details-icon" />
							<div>
								<h4>Tailwind CSS</h4>
							</div>
						</article>
						<article className="experience-details">
							<SiRedux className="experience-details-icon" />
							<div>
								<h4>Jest</h4>
							</div>
						</article>
						<article className="experience-details">
							<SiRedux className="experience-details-icon" />
							<div>
								<h4>Redux</h4>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
