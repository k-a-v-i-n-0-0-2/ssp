// About.jsx
import { useState } from 'react';
import { FiArrowRight, FiCheck, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Ashwanth Maths</h1>
          <p className="subtitle">Transforming mathematical education since 2010</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values Tabs */}
      <section className="about-tabs-section">
        <div className="container">
          <div className="tabs-header">
            <button 
              className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'mission' && (
              <div className="mission-content">
                <h2>Empowering Students Through Mathematics</h2>
                <p>
                  Our mission is to demystify mathematics and make it accessible to every student, 
                  regardless of their initial skill level. We believe that with the right guidance, 
                  every student can develop mathematical proficiency and confidence.
                </p>
                <ul className="mission-points">
                  <li><FiCheck /> Personalized learning approaches for each student</li>
                  <li><FiCheck /> Building strong foundational skills</li>
                  <li><FiCheck /> Fostering problem-solving abilities</li>
                  <li><FiCheck /> Preparing students for academic and real-world challenges</li>
                </ul>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="vision-content">
                <h2>Shaping the Future of Mathematical Education</h2>
                <p>
                  We envision a world where mathematics is no longer a barrier but a gateway to 
                  opportunity. Our goal is to be at the forefront of innovative math education, 
                  combining traditional teaching methods with modern pedagogical approaches.
                </p>
                <div className="vision-stats">
                  <div className="stat-item">
                    <FiAward className="stat-icon" />
                    <h3>15+</h3>
                    <p>Years of Excellence</p>
                  </div>
                  <div className="stat-item">
                    <FiUsers className="stat-icon" />
                    <h3>2500+</h3>
                    <p>Students Transformed</p>
                  </div>
                  <div className="stat-item">
                    <FiBookOpen className="stat-icon" />
                    <h3>100%</h3>
                    <p>Curriculum Coverage</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="values-content">
                <h2>Core Values That Guide Us</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <h3>Excellence</h3>
                    <p>We strive for the highest standards in teaching and student outcomes.</p>
                  </div>
                  <div className="value-card">
                    <h3>Integrity</h3>
                    <p>Honest communication and ethical practices in all we do.</p>
                  </div>
                  <div className="value-card">
                    <h3>Innovation</h3>
                    <p>Continuously improving our teaching methods and approaches.</p>
                  </div>
                  <div className="value-card">
                    <h3>Compassion</h3>
                    <p>Understanding each student's unique needs and challenges.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>Ashwanth Maths was founded with a single classroom and a vision to transform math education.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2014</div>
              <div className="timeline-content">
                <h3>First Expansion</h3>
                <p>Opened second location to accommodate growing student demand.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Curriculum Innovation</h3>
                <p>Developed proprietary teaching methodology that improved student outcomes by 40%.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>Launched online learning platform to reach students beyond physical locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Founders</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/ramya.jpg" alt="R. Ramya M.E." />
              </div>
              <div className="member-info">
                <h3>R. Ramya M.E.</h3>
                <p className="position">Mathematics Specialist</p>
                <p className="bio">
                  With over 15 years of teaching experience, Ramya brings engineering precision to 
                  mathematical education. Her ability to break down complex concepts has helped 
                  thousands of students overcome math anxiety.
                </p>
                <div className="member-stats">
                  <div className="stat">
                    <span>15+</span>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat">
                    <span>98%</span>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/santhiya.jpg" alt="Sri Santhiya" />
              </div>
              <div className="member-info">
                <h3>Sri Santhiya</h3>
                <p className="position">Science Specialist</p>
                <p className="bio">
                  Sri Santhiya's passion for chemistry and physics education has made her one of 
                  the most sought-after tutors in the region. Her practical approach connects 
                  classroom learning with real-world applications.
                </p>
                <div className="member-stats">
                  <div className="stat">
                    <span>12+</span>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat">
                    <span>95%</span>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Transform Your Math Skills?</h2>
          <p>
            Join hundreds of successful students who have discovered their mathematical potential 
            with Ashwanth Maths.
          </p>
          <Link to="/contact" className="cta-button">
            Get Started <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;