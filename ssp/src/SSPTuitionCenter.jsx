import { useState, useEffect } from 'react';
import { 
  FiArrowLeft, FiCheck, FiUser, FiCalendar, 
  FiClock, FiDollarSign, FiBook, FiAward 
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SSPTutitonCenter.module.css';

const SSPTuitionCenter = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Scroll handler for navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animation hook
  const useScrollAnimation = () => {
    useEffect(() => {
      const animateOnScroll = () => {
        const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < window.innerHeight - 150) {
            element.classList.add(styles.visible);
          }
        });
      };
      
      window.addEventListener('scroll', animateOnScroll);
      setTimeout(animateOnScroll, 200);
      return () => window.removeEventListener('scroll', animateOnScroll);
    }, []);
  };
  useScrollAnimation();

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Link to="/">
              <h1>Ashwanth<span>Maths</span></h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <div className={styles.backButton} onClick={() => navigate(-1)}>
            <FiArrowLeft /> Back
          </div>
          <h1 className={`${styles.pageTitle} ${styles.animateOnScroll}`}>
            SSP Tuition Center
          </h1>
          <p className={`${styles.pageSubtitle} ${styles.animateOnScroll}`}>
            Group Classes with Expert Faculty
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className={`${styles.programOverview} ${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Program Overview</h2>
            <p className={styles.sectionSubtitle}>Excellence in Group Learning Environment</p>
          </div>
          
          <div className={styles.overviewContent}>
            <div className={`${styles.overviewImage} ${styles.animateOnScroll}`}>
              <img src="/images/classroom.jpg" alt="Classroom" />
            </div>
            
            <div className={`${styles.overviewText} ${styles.animateOnScroll}`}>
              <p>Our SSP Tuition Center offers a structured group learning environment where students benefit from expert instruction while collaborating with peers. We provide modern facilities and comprehensive resources for academic success.</p>
              
              <div className={styles.keyHighlights}>
                <h3>Key Features</h3>
                <ul className={styles.highlightsList}>
                  <li><FiCheck /> Air-conditioned smart classrooms</li>
                  <li><FiCheck /> Small batches (max 10 students)</li>
                  <li><FiCheck /> Complete study material package</li>
                  <li><FiCheck /> Weekly tests & progress reports</li>
                  <li><FiCheck /> Digital learning portal access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className={`${styles.facultySection} ${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Our Faculty</h2>
            <p className={styles.sectionSubtitle}>Learn from Industry Experts</p>
          </div>
          
          <div className={styles.facultyCards}>
            {/* Faculty Card 1 */}
            <div className={`${styles.facultyCard} ${styles.animateOnScroll}`}>
              <div className={styles.facultyImage}>
                <div className={styles.facultyAvatar}>
                  <FiUser size={48} />
                </div>
              </div>
              <div className={styles.facultyDetails}>
                <h3>R. Ramya M.E.</h3>
                <p className={styles.facultySpecialization}>Mathematics & Advanced Maths</p>
                <p className={styles.facultyExperience}><FiAward /> 10+ years experience</p>
                <div className={styles.facultyAchievements}>
                  <h4>Notable Achievements:</h4>
                  <ul>
                    <li>Produced 15+ State rank holders</li>
                    <li>98% students scored 90%+ in boards</li>
                    <li>JEE Main/Advanced specialist</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Faculty Card 2 */}
            <div className={`${styles.facultyCard} ${styles.animateOnScroll}`}>
              <div className={styles.facultyImage}>
                <div className={styles.facultyAvatar}>
                  <FiUser size={48} />
                </div>
              </div>
              <div className={styles.facultyDetails}>
                <h3>Sri Santhiya</h3>
                <p className={styles.facultySpecialization}>Physics & Chemistry</p>
                <p className={styles.facultyExperience}><FiAward /> 8+ years experience</p>
                <div className={styles.facultyAchievements}>
                  <h4>Notable Achievements:</h4>
                  <ul>
                    <li>Science Olympiad expert</li>
                    <li>NEET/NTSE specialist</li>
                    <li>Concept visualization pioneer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className={`${styles.programDetails} ${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>Program Structure</h2>
            <p className={styles.sectionSubtitle}>Comprehensive Learning Framework</p>
          </div>
          
          <div className={styles.detailsGrid}>
            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}><FiBook /></div>
              <h3>Curriculum</h3>
              <ul>
                <li>CBSE/State/ICSE Syllabus</li>
                <li>Classes 8-12 Mathematics</li>
                <li>Competitive Exam Modules</li>
                <li>Foundation Courses</li>
              </ul>
            </div>

            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}><FiCalendar /></div>
              <h3>Schedule</h3>
              <ul>
                <li>Weekdays: 4-6pm / 6-8pm</li>
                <li>Weekends: 10am-1pm</li>
                <li>Holiday Intensive Programs</li>
                <li>Exam Crash Courses</li>
              </ul>
            </div>

            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}><FiClock /></div>
              <h3>Session Structure</h3>
              <ul>
                <li>2-hour sessions</li>
                <li>Concept Teaching (45m)</li>
                <li>Practice Session (60m)</li>
                <li>Doubt Solving (15m)</li>
              </ul>
            </div>

            <div className={`${styles.detailCard} ${styles.animateOnScroll}`}>
              <div className={styles.detailIcon}><FiDollarSign /></div>
              <h3>Fee Structure</h3>
              <ul>
                <li>Monthly: ₹3,500/subject</li>
                <li>Quarterly: ₹9,500/subject</li>
                <li>Half-yearly: ₹18,000/subject</li>
                <li>Annual: ₹33,000/subject</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className={`${styles.enrollmentCta} ${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.ctaContent} ${styles.animateOnScroll}`}>
            <h2>Start Your Success Journey Today!</h2>
            <p>Transform your academic performance with our proven teaching methodology</p>
            <div className={styles.ctaButtons}>
              <button className={`${styles.ctaButton} ${styles.primaryButton}`}>
                Enroll Now
              </button>
              <button className={`${styles.ctaButton} ${styles.secondaryButton}`}>
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faqSection} ${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <h2 className={styles.sectionTitle}>FAQs</h2>
            <p className={styles.sectionSubtitle}>Common Questions Answered</p>
          </div>
          
          <div className={styles.faqList}>
            <div className={`${styles.faqItem} ${styles.animateOnScroll}`}>
              <h3>What's the batch size?</h3>
              <p>We maintain small batches of maximum 10 students for personalized attention.</p>
            </div>

            <div className={`${styles.faqItem} ${styles.animateOnScroll}`}>
              <h3>Study materials included?</h3>
              <p>Yes, we provide printed notes, practice sheets, and digital resources.</p>
            </div>

            <div className={`${styles.faqItem} ${styles.animateOnScroll}`}>
              <h3>Progress tracking?</h3>
              <p>Weekly tests, monthly parent-teacher meetings, and digital progress reports.</p>
            </div>

            <div className={`${styles.faqItem} ${styles.animateOnScroll}`}>
              <h3>Mid-term admissions?</h3>
              <p>Yes, we offer bridge courses for students joining mid-academic year.</p>
            </div>
          </div>

          <div className={`${styles.contactInfo} ${styles.animateOnScroll}`}>
            <p>More questions? Contact us at <strong>info@ashwanthmaths.com</strong> or call <strong>+91 98765 43210</strong></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerContent}`}>
          <div className={styles.footerLogo}>
            <h2>Ashwanth<span>Maths</span></h2>
            <p>Excellence in Mathematics Education</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkGroup}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.footerLinkGroup}>
              <h3>Connect</h3>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#youtube">YouTube</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <p>&copy; 2024 Ashwanth Maths. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SSPTuitionCenter;