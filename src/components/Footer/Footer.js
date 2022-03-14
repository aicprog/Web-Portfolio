import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			{/* <a href="#" className="footer-logo">
				Adriany Cocom
			</a> */}
			<div className="footer-container">
				<ul className="permalinks">
					<li>
						<a href="">Adriany Cocom</a>
					</li>
				</ul>
				<p className="copyright">
					&copy; {new Date().getFullYear()} Adriany Cocom
				</p>
			</div>
		</footer>
	);
};

export default Footer;
