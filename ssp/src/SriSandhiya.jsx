import { useState, useEffect } from 'react';
import { 
  FiArrowLeft, 
  FiCheck, 
  FiUser, 
  FiCalendar, 
  FiClock, 
  FiDollarSign, 
  FiBook, 
  FiAward, 
  FiMapPin 
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SriSandhiya.module.css';

const SriSandhiya = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll for header animation and scroll animations
  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Scroll animations for elements
      const animatedElements = document.querySelectorAll(`.${styles.animateOnScroll}`);
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.85);
        
        if (isVisible) {
          el.classList.add(styles.visible);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in view
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      {/* Header/Navbar */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.headerContainer} ${styles.container}`}>
          <div className={styles.logo}>
            <h1>Sri<span>Sandhiya</span></h1>
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
              <li><Link to="/" className={styles.navLink}>Home</Link></li>
              <li><Link to="/programs" className={styles.navLink}>Programs</Link></li>
              <li><Link to="/faculty" className={styles.navLink}>Faculty</Link></li>
              <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Sri Sandhiya Special Program</h1>
          <p className={styles.pageSubtitle}>Premium One-on-One Home Tuition for Accelerated Learning</p>
        </div>
      </section>

      {/* Program Overview */}
      <section className={`${styles.section} ${styles.programOverview}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Program Overview</h2>
            <p className={styles.sectionSubtitle}>A comprehensive approach to personalized education</p>
          </div>
          
          <div className={styles.overviewContent}>
            <div className={`${styles.overviewImage} ${styles.animateOnScroll}`}>
              <img src="./t2.p" alt="Sri Sandhiya Program" />
            </div>
            
            <div className={`${styles.overviewText} ${styles.animateOnScroll}`}>
            
              <div className={styles.keyHighlights}>
                <h3>Key Highlights</h3>
                <ul className={styles.highlightsList}>
                  <li>
                    <FiCheck size={20} color="#1e88e5" />
                    Personalized learning plans tailored to individual needs
                  </li>
                  <li>
                    <FiCheck size={20} color="#1e88e5" />
                    Expert faculty with proven teaching excellence
                  </li>
                  <li>
                    <FiCheck size={20} color="#1e88e5" />
                    Comprehensive curriculum covering all key subjects
                  </li>
                  <li>
                    <FiCheck size={20} color="#1e88e5" />
                    Regular progress tracking and performance analysis
                  </li>
                  <li>
                    <FiCheck size={20} color="#1e88e5" />
                    Flexible scheduling to accommodate student availability
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className={`${styles.section} ${styles.methodologySection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Teaching Methodology</h2>
            <p className={styles.sectionSubtitle}>Our approach to effective learning</p>
          </div>
          
          <div className={`${styles.methodologyContent} ${styles.animateOnScroll}`}>
            <div className={styles.methodologyText}>
              
              <ul className={styles.methodologyList}>
                <li>
                  <FiCheck size={20} color="#1e88e5" />
                  Concept-based learning with practical applications
                </li>
                <li>
                  <FiCheck size={20} color="#1e88e5" />
                  Interactive teaching with visual aids and practical demonstrations
                </li>
                <li>
                  <FiCheck size={20} color="#1e88e5" />
                  Regular assessments to identify strengths and areas of improvement
                </li>
                <li>
                  <FiCheck size={20} color="#1e88e5" />
                  Problem-solving approaches to develop analytical thinking
                </li>
                <li>
                  <FiCheck size={20} color="#1e88e5" />
                  Adaptive teaching methods based on student response and progress
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Coverage */}
      <section className={`${styles.section} ${styles.subjectSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Subject Coverage</h2>
            <p className={styles.sectionSubtitle}>Comprehensive academic support across key subjects</p>
          </div>
          
          <div className={styles.subjectGrid}>
            <div className={`${styles.subjectCard} ${styles.animateOnScroll}`}>
              <div className={styles.subjectIcon}>
                <FiBook />
              </div>
              <h3>Mathematics</h3>
              <p>Comprehensive coverage of algebra, geometry, calculus, and advanced topics with practical problem-solving approaches.</p>
            </div>
            
            <div className={`${styles.subjectCard} ${styles.animateOnScroll}`}>
              <div className={styles.subjectIcon}>
                <FiBook />
              </div>
              <h3>Physics</h3>
              <p>From mechanics to quantum physics, with emphasis on conceptual understanding and numerical problem-solving.</p>
            </div>
            
            <div className={`${styles.subjectCard} ${styles.animateOnScroll}`}>
              <div className={styles.subjectIcon}>
                <FiBook />
              </div>
              <h3>Chemistry</h3>
              <p>Organic, inorganic, and physical chemistry with practical applications and exam-oriented preparation.</p>
            </div>
            
            <div className={`${styles.subjectCard} ${styles.animateOnScroll}`}>
              <div className={styles.subjectIcon}>
                <FiBook />
              </div>
              <h3>Biology</h3>
              <p>In-depth coverage of molecular biology, genetics, human physiology, and environmental science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className={`${styles.section} ${styles.facultySection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Our Expert Faculty</h2>
            <p className={styles.sectionSubtitle}>Learn from experienced educators with proven excellence</p>
          </div>
          
          <div className={styles.facultyCards}>
            <div className={`${styles.facultyCard} ${styles.animateOnScroll}`}>
              <div className={styles.facultyImage}>
                <div className={styles.facultyAvatar}>
                  <FiUser size={40} />
                </div>
              </div>
              <div className={styles.facultyDetails}>
                <h3>Dr. Ramesh Kumar</h3>
                <p className={styles.facultySpecialization}>Mathematics Specialist</p>
                <p className={styles.facultyExperience}>
                  <FiCalendar size={16} />
                  <span>15+ Years Experience</span>
                </p>
                <div className={styles.facultyAchievements}>
                  <h4>Key Achievements</h4>
                  <ul>
                    <li>Ph.D. in Applied Mathematics</li>
                    <li>Author of 3 textbooks on advanced calculus</li>
                    <li>Mentored 200+ students for competitive exams</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`${styles.facultyCard} ${styles.animateOnScroll}`}>
              <div className={styles.facultyImage}>
                <div className={styles.facultyAvatar}>
                  <FiUser size={40} />
                </div>
              </div>
              <div className={styles.facultyDetails}>
                <h3>Prof. Lakshmi Anand</h3>
                <p className={styles.facultySpecialization}>Physics Expert</p>
                <p className={styles.facultyExperience}>
                  <FiCalendar size={16} />
                  <span>12+ Years Experience</span>
                </p>
                <div className={styles.facultyAchievements}>
                  <h4>Key Achievements</h4>
                  <ul>
                    <li>M.Sc. in Theoretical Physics</li>
                    <li>Former Senior Lecturer at IIT</li>
                    <li>Developed innovative teaching methodologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className={`${styles.section} ${styles.programDetails}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Program Details</h2>
            <p className={styles.sectionSubtitle}>Everything you need to know about our program</p>
          </div>
          
          <div className={styles.detailsGrid}>
            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}>
                <FiClock />
              </div>
              <h3>Duration</h3>
              <p>12-week program with flexibility to extend based on student progress and needs</p>
            </div>
            
            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}>
                <FiCalendar />
              </div>
              <h3>Schedule</h3>
              <p>Flexible timing with 3-5 sessions per week, each lasting 1.5 to 2 hours</p>
            </div>
            
            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}>
                <FiMapPin />
              </div>
              <h3>Location</h3>
              <p>Convenient home tuition at your residence or online via our interactive learning platform</p>
            </div>
            
            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}>
                <FiDollarSign />
              </div>
              <h3>Investment</h3>
              <p>Premium package starting at ₹25,000 with customization options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>What Our Students Say</h2>
            <p className={styles.sectionSubtitle}>Success stories from our program</p>
          </div>
          
          <div className={styles.testimonialCards}>
            <div className={`${styles.testimonialCard} ${styles.animateOnScroll}`}>
              <p className={styles.testimonialText}>
                "The Sri Sandhiya program transformed my approach to mathematics. The personalized 
                attention helped me overcome my challenges, and I saw a remarkable improvement in 
                my performance. I secured 95% in my board exams after just one semester of tuition."
              </p>
              <p className={styles.testimonialAuthor}>Ravi Sharma, Class 12 Student</p>
            </div>
            
            <div className={`${styles.testimonialCard} ${styles.animateOnScroll}`}>
              <p className={styles.testimonialText}>
                "What sets Sri Sandhiya apart is their focus on conceptual understanding rather 
                than just solving problems. The faculty members are extremely knowledgeable and 
                patient. My daughter's confidence in physics has improved significantly."
              </p>
              <p className={styles.testimonialAuthor}>Priya Nair, Parent</p>
            </div>
            
            <div className={`${styles.testimonialCard} ${styles.animateOnScroll}`}>
              <p className={styles.testimonialText}>
                "The flexibility of scheduling sessions around my extracurricular activities was 
                a huge advantage. The teachers understand how each student learns differently and 
                adapt their methods accordingly. I got admitted to my dream engineering college!"
              </p>
              <p className={styles.testimonialAuthor}>Aditya Patel, Engineering Aspirant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className={styles.enrollmentCta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Begin Your Learning Journey?</h2>
          <p>Enroll in our Sri Sandhiya Special Program and experience education tailored to your needs</p>
          <div className={styles.ctaButtons}>
            <button className={`${styles.ctaButton} ${styles.primaryButton}`}>
              <FiCheck size={18} />
              Enroll Now
            </button>
            <button className={`${styles.ctaButton} ${styles.secondaryButton}`}>
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>Sri<span>Sandhiya</span></h2>
            <p>Transforming education through personalized learning experiences.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkGroup}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerLinkGroup}>
              <h3>Contact Information</h3>
              <ul>
                <li>Email: info@srisandhiya.edu</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: 123 Education Street, Chennai, India</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Sri Sandhiya Education. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SriSandhiya;