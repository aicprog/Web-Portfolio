import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
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
