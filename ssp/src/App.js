import { useState, useEffect } from 'react';
import { 
  FiMenu, FiX, FiArrowRight, FiMapPin, FiClock, FiPhone, 
  FiHome, FiBook, FiStar, FiCheck, FiUser, FiAward, FiCalendar 
} from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Import the detail page components
import SriSandhiya from './SriSandhiya';
import HomePersonalTuition from './HomePersonalTuition';
import TutoringBooking from './BookEnquiry'; // Import the booking component

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false); // State to control booking form display
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section when nav link is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    useEffect(() => {
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
          }
        });
      };
      
      window.addEventListener('scroll', animateOnScroll);
      // Trigger once on load
      setTimeout(animateOnScroll, 200);
      
      return () => window.removeEventListener('scroll', animateOnScroll);
    }, []);
  };

  useScrollAnimation();

  // Handle navigation to detail pages
  const handleNavigateToDetails = (page) => {
    navigate(`/${page}`);
  };

  // Open booking form
  const openBookingForm = () => {
    setShowBookingForm(true);
  };

  // Close booking form
  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <div className="app">
      {/* Header/Navbar */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <Link to="/">
              <h1>Ashwanth<span>Maths</span></h1>
            </Link>
          </div>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
          
          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#subjects" onClick={() => scrollToSection('subjects')}>Subjects</a></li>
              <li><a href="#programs" onClick={() => scrollToSection('programs')}>Tutoring Programs</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content animate-on-scroll">
            <h1 className="hero-title">
              Excellence in <span className="accent-text typing-effect">Mathematics</span> Education
            </h1>
            <p className="hero-subtitle">
              Transform your mathematical abilities with personalized coaching from experienced educators
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary-button" onClick={openBookingForm}>
                Get Started <FiArrowRight className="btn-icon" />
              </button>
              <button className="cta-button secondary-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">About Our Program</h2>
            <p className="section-subtitle">Building strong mathematical foundations since 2010</p>
          </div>
          
          <div className="about-content">
            <div className="about-image animate-on-scroll">
              <img src="./sri.png" alt="Mathematics Tutor" />
            </div>
            
            <div className="about-text animate-on-scroll">
              <h3>Why Choose Ashwanth Maths?</h3>
              <p>At Ashwanth Maths, we believe that every student has the potential to excel in mathematics with the right guidance and approach. Our proven methodology combines traditional teaching with modern techniques to ensure comprehensive understanding and application.</p>
              
              <ul className="features-list">
                <li><FiCheck className="feature-icon" /> Personalized learning plans tailored to individual needs</li>
                <li><FiCheck className="feature-icon" /> Small batch sizes ensuring personal attention</li>
                <li><FiCheck className="feature-icon" /> Regular assessments to track progress</li>
                <li><FiCheck className="feature-icon" /> Focus on building problem-solving skills</li>
                <li><FiCheck className="feature-icon" /> Experienced educators with proven track records</li>
              </ul>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2500+</span>
                  <span className="stat-label">Students Taught</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Tutoring Programs Section with updated button handlers */}
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Premium Tutoring Programs</h2>
            <p className="section-subtitle">Choose the program that fits your educational needs</p>
          </div>
          
          <div className="programs-container">
          
            
            {/* Sri Sandhiya Special */}
            <div className="program-card animate-on-scroll featured-program">
              <div className="program-header">
                <h3>Sri Sandhiya Special (Home Tuition)</h3>
                <div className="program-badge">Premium</div>
              </div>
              <div className="faculty-section">
                <h4>Expert Faculty:</h4>
                <div className="faculty-member">
                  <div className="faculty-avatar">
                    <FiUser />
                  </div>
                  <div className="faculty-info">
                    <h5>Sri Santhiya</h5>
                    <p>Chemistry & Physics</p>
                    <span className="experience-badge">8+ years</span>
                  </div>
                </div>
              </div>

              
              <ul className="program-features">
                <li><FiCheck className="feature-icon" /> 1-on-1 personalized coaching</li>
                <li><FiCheck className="feature-icon" /> Flexible scheduling options</li>
                <li><FiCheck className="feature-icon" /> Exam-oriented specialized teaching</li>
                <li><FiCheck className="feature-icon" /> Special CBSE pattern training</li>
                <li><FiCheck className="feature-icon" /> Regular parent-teacher consultation</li>
              </ul>
              
              <button 
                className="details-button" 
                onClick={() => handleNavigateToDetails('sri-sandhiya')}
              >
                View Details <FiArrowRight className="btn-icon" />
              </button>
            </div>
            
            {/* Home Personal Tuition */}
            <div className="program-card animate-on-scroll">
              <div className="program-header">
                <h3>Home Personal Tuition</h3>
                <div className="program-badge">Doorstep</div>
              </div>
              
              <div className="faculty-section">
                <h4>Expert Faculty:</h4>
                
                <div className="faculty-member">
                  <div className="faculty-avatar">
                    <FiUser />
                  </div>
                  <div className="faculty-info">
                    <h5>Sathish Dhanabal</h5>
                    <p>Mathematics</p>
                    <span className="experience-badge">8+ years</span>
                  </div>
                </div>
              </div>

              
              <ul className="program-features">
                <li><FiCheck className="feature-icon" /> Premium doorstep teaching service</li>
                <li><FiCheck className="feature-icon" /> All boards (CBSE/State/ICSE) covered</li>
                <li><FiCheck className="feature-icon" /> Intensive crash courses available</li>
                <li><FiCheck className="feature-icon" /> Focus on practical applications</li>
                <li><FiCheck className="feature-icon" /> Special holiday acceleration classes</li>
              </ul>
              
              <button 
                className="details-button" 
                onClick={() => handleNavigateToDetails('home-personal')}
              >
                View Details <FiArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Subjects Section with Improved Cards */}
      <section id="subjects" className="subjects-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Comprehensive Subject Coverage</h2>
            <p className="section-subtitle">Expert guidance across all mathematical disciplines</p>
          </div>
          
          <div className="subjects-grid">
            <div className="subject-card animate-on-scroll">
              <div className="subject-card-inner">
                <div className="subject-icon">
                  <FiBook />
                </div>
                <h3>CBSE Maths</h3>
                <p className="subject-description">Master equations, functions, and algebraic structures with our specialized approach to this fundamental branch of mathematics.</p>
                <div className="experience-badge">12+ Years Teaching</div>
              </div>
            </div>
            
            <div className="subject-card animate-on-scroll">
              <div className="subject-card-inner">
                <div className="subject-icon">
                  <FiBook />
                </div>
                <h3>Mathematics</h3>
                <p className="subject-description">Understand limits, derivatives, and integrals through our intuitive teaching methods that make complex concepts accessible.</p>
                <div className="experience-badge">15+ Years Teaching</div>
              </div>
            </div>
            
            <div className="subject-card animate-on-scroll">
              <div className="subject-card-inner">
                <div className="subject-icon">
                  <FiBook />
                </div>
                <h3>Physics</h3>
                <p className="subject-description">Explore shapes, dimensions, and spatial relationships with our visual and interactive approach to geometric principles.</p>
                <div className="experience-badge">10+ Years Teaching</div>
              </div>
            </div>
            
            <div className="subject-card animate-on-scroll">
              <div className="subject-card-inner">
                <div className="subject-icon">
                  <FiBook />
                </div>
                <h3>Chemistry</h3>
                <p className="subject-description">Learn data analysis, probability, and statistical inference with real-world applications and practical examples.</p>
                <div className="experience-badge">8+ Years Teaching</div>
              </div>
            </div>
            
            <div className="subject-card animate-on-scroll">
              <div className="subject-card-inner">
                <div className="subject-icon">
                  <FiBook />
                </div>
                <h3>Business Maths</h3>
                <p className="subject-description">Master angles, triangles, and trigonometric functions with our clear explanations and problem-solving techniques.</p>
                <div className="experience-badge">14+ Years Teaching</div>
              </div>
            </div>
            
            <div className="subject-card animate-on-scroll">
              <div className="subject-card-inner">
                <div className="subject-icon">
                  <FiBook />
                </div>
                <h3>Hindi </h3>
                <p className="subject-description">Discover the fascinating properties of numbers and their relationships through our engaging curriculum.</p>
                <div className="experience-badge">9+ Years Teaching</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">What our students and parents have to say</p>
          </div>
          
          <div className="testimonials-container">
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                "Ashwanth Maths transformed my approach to calculus. I went from struggling with basic concepts to scoring top marks in my exams. The personalized attention made all the difference."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RK</div>
                <div>
                  <p className="testimonial-name">Rahul Kumar</p>
                  <p className="testimonial-position">Engineering Student</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                "My daughter struggled with math anxiety for years. After joining Ashwanth Maths, her confidence has soared and she now enjoys solving complex problems. The teaching approach here is truly exceptional."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SP</div>
                <div>
                  <p className="testimonial-name">Sanjay Patel</p>
                  <p className="testimonial-position">Parent</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                "The systematic approach to statistics here helped me understand concepts that I had struggled with for years. The real-world applications make learning both practical and interesting."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AN</div>
                <div>
                  <p className="testimonial-name">Anita Nair</p>
                  <p className="testimonial-position">BSc Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Schedule a consultation or learn more about our programs</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <h3>Location</h3>
                  <p>123 Education Street, Mathematics Building, 2nd Floor</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FiClock className="contact-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 7pm</p>
                  <p>Saturday: 9am - 2pm</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <div>
                  <h3>Contact Number</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="contact-buttons">
                <a href="tel:+919876543210" className="contact-btn">
                  <FiPhone /> Call Now
                </a>
                <a href="https://wa.me/919876543210" className="contact-btn whatsapp">
                  <FiPhone /> WhatsApp
                </a>
              </div>
            </div>
            <div className="contact-form animate-on-scroll">
  <div className="map-container" style={{
    position: "relative", 
    width: "100%", 
    height: "450px", 
    overflow: "hidden", 
    borderRadius: "16px",
    boxShadow: "var(--shadow-sm)",
    border: "1px solid var(--light-gray)"
  }}>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.123456789!2d-122.08467!3d37.422199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI1JzE5LjkiTiAxMjLCsDA1JzA0LjgiVw!5e0!3m2!1sen!2sus!4v1648765234567!5m2!1sen!2sus" 
      width="100%" 
      height="100%" 
      style={{border: "0"}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Ashwanth Maths Location"
    ></iframe>
</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-logo">
            <h2>Ashwanth<span>Maths</span></h2>
            <p>Excellence in Mathematics Education</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#subjects">Subjects</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h3>Connect With Us</h3>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#youtube">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2025 Ashwanth Maths. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Render Booking Form when showBookingForm is true */}
      {showBookingForm && (
        <TutoringBooking 
          onClose={closeBookingForm} 
          preSelectedProgram="" 
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sri-sandhiya" element={<SriSandhiya />} />
        <Route path="/home-personal" element={<HomePersonalTuition />} />
      </Routes>
    </Router>
  );
}

export default App;