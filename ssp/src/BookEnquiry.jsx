import { useState } from 'react';
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMessageSquare, FiCheck, FiAlertTriangle, FiX } from 'react-icons/fi';
import './App.css'; // We'll add the CSS styles to your existing App.css

const BookingEnquiry = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Business Maths',
    'Hindi',
    'Other'
  ];

  const timeSlots = [
    'Morning (9AM - 12PM)',
    'Afternoon (12PM - 3PM)',
    'Evening (3PM - 6PM)',
    'Night (6PM - 9PM)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.subject) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit enquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button className="close-button" onClick={onClose}>
          <FiX size={24} />
        </button>
        
        {isSubmitted ? (
          <div className="success-message">
            <FiCheck size={50} className="success-icon" />
            <h2>Enquiry Submitted!</h2>
            <p>
              Thank you, {formData.name}. We've received your enquiry for {formData.subject}.
              Our team will contact you shortly at {formData.phone}.
            </p>
            <button className="primary-button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>Book a Free Consultation</h2>
            <p className="modal-subtitle">Fill out the form and we'll get back to you within 24 hours</p>
            
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label><FiUser /> Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label><FiPhone /> Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label><FiMail /> Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label><FiBook /> Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label><FiClock /> Preferred Time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Any time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label><FiMessageSquare /> Additional Notes</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us about your learning goals or any special requests"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="primary-button"
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span> Submitting...
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};