import React, { useRef, useState } from 'react';
import HeaderSocials from '../Header/HeaderSocials';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();
	const [contacted, setContacted] = useState(false);
	const userID = process.env.REACT_APP_USER_ID;
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
					setContacted(true);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact-container">
				<HeaderSocials footer />
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						type="message"
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send message
					</button>
				</form>
			</div>
			{contacted ? (
				<p className="contacted">
					Thank you for reaching out. Will be in contact with you shortly!
				</p>
			) : null}
		</section>
	);
};

export default Contact;
