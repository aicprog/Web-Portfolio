import React from 'react';
import './Certificates.css';
import certificate1 from '../../assets/certificates/certificate1.png';
import certificate2 from '../../assets/certificates/certificate2.png';
import { certificates } from '../../constants/constants';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Certificates = () => {
	return (
		<section id="certificates">
			<h5>Accreditations</h5>
			<h2>Certificates</h2>

			<Swiper
				className="container certificates-container" // install Swiper modules
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{certificates.map((certificate) => {
					return (
						<SwiperSlide className="certificate" key={certificate.id}>
							<div className="certificate-image">
								<a href={certificate.link} target="_blank">
									<img src={certificate.image} alt="certificate 1" />
								</a>
							</div>
							<h5 className="certificate-name">{certificate.title}</h5>
							<small className="certificate-description">
								{certificate.description}
							</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Certificates;
