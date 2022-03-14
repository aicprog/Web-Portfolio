import React from 'react';
import './Projects.css';
import { projectsList } from '../../constants/constants';

const Projects = () => {
	return (
		<section id="projects">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container project-container">
				{projectsList.map((project) => {
					return (
						<article className="project-item" key={project.id}>
							<div className="project-item-image">
								<a href={project.visit} target="_blank" rel="noreferrer">
									<img src={project.image} alt="project" />
								</a>
							</div>
							<h3 className="project-title">{project.title}</h3>
							<hr className="break" />
							<ul className="project-tag-list">
								{project.tags.map((tag, i) => (
									<li key={i}>&nbsp;{tag}&nbsp; </li>
								))}
							</ul>
							<div className="portfolio-item-cta">
								<a
									href={project.source}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
								<a
									href={project.visit}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Website
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
