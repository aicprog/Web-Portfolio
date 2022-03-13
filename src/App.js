import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<ul className="background">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<Header />
			<Navbar />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
