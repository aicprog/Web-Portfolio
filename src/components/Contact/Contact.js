import React from 'react';
import HeaderSocials from '../Header/HeaderSocials';
import './Contact.css';

const Contact = () => {
	return (
		<section id="contact">
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact-container">
				<HeaderSocials footer />
				<form action="">
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="name" placeholder="Your Email" required />
					<textarea
						type="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
