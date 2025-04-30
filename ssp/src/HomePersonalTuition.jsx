import { useState, useEffect } from 'react';
import { 
  FiArrowLeft, FiCheck, FiUser, FiCalendar, 
  FiClock, FiDollarSign, FiBook, FiAward, FiHome, FiTarget
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

function HomePersonalTuition() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    
    // Handle scroll effect for navbar
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className={`fixed w-full z-10 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Ashwanth Maths</Link>
            <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 hover:text-blue-800">
              <FiArrowLeft className="mr-2" /> Back
            </button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="pt-24 pb-12 bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Home Personal Tuition</h1>
            <p className="text-xl mb-6">Personalized Learning in the Comfort of Your Home</p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Program Details */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Program Details</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-600">About the Program</h3>
                <p className="text-gray-700 mb-4">
                  Our Home Personal Tuition program offers one-on-one instruction in the comfort and convenience of your own home. 
                  This personalized approach allows our tutors to focus entirely on your child's needs, learning style, and pace.
                </p>
                <p className="text-gray-700 mb-4">
                  We carefully match students with tutors who not only have expertise in mathematics but also connect well with your child's 
                  learning style and personality. This personalized approach has proven to significantly improve academic performance and confidence.
                </p>
              </div>
  
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-green-500" />
                    <span className="text-gray-700">Complete personalization of learning materials and teaching methods</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-green-500" />
                    <span className="text-gray-700">Convenience of learning in your own home environment</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-green-500" />
                    <span className="text-gray-700">Flexible scheduling to accommodate your family's busy lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-green-500" />
                    <span className="text-gray-700">Elimination of travel time and associated costs</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-green-500" />
                    <span className="text-gray-700">Regular progress reports and parent communication</span>
                  </li>
                </ul>
              </div>
  
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Curriculum Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Our home tuition covers the complete mathematics curriculum with additional focus on areas where your child needs extra support:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <li className="flex items-center">
                    <FiBook className="mr-2 text-green-500" />
                    <span className="text-gray-700">Algebra and Functions</span>
                  </li>
                  <li className="flex items-center">
                    <FiBook className="mr-2 text-green-500" />
                    <span className="text-gray-700">Geometry and Trigonometry</span>
                  </li>
                  <li className="flex items-center">
                    <FiBook className="mr-2 text-green-500" />
                    <span className="text-gray-700">Calculus and Advanced Math</span>
                  </li>
                  <li className="flex items-center">
                    <FiBook className="mr-2 text-green-500" />
                    <span className="text-gray-700">Problem-Solving Techniques</span>
                  </li>
                  <li className="flex items-center">
                    <FiBook className="mr-2 text-green-500" />
                    <span className="text-gray-700">Exam Preparation</span>
                  </li>
                  <li className="flex items-center">
                    <FiBook className="mr-2 text-green-500" />
                    <span className="text-gray-700">Competitive Exam Training</span>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Program Details Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-3">At a Glance</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FiUser className="mr-3 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Students</p>
                      <p className="font-medium text-gray-800">One-on-One Instruction</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FiHome className="mr-3 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-800">Student's Home</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FiCalendar className="mr-3 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-800">Flexible (3-12 months)</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FiClock className="mr-3 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="font-medium text-gray-800">Flexible (2-6 hours weekly)</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FiTarget className="mr-3 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Grade Levels</p>
                      <p className="font-medium text-gray-800">6th - 12th Grade</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FiDollarSign className="mr-3 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Pricing</p>
                      <p className="font-medium text-gray-800">Starting at ₹800 per hour</p>
                    </div>
                  </li>
                </ul>
              </div>
  
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-semibold mb-3">Interested in Home Tuition?</h3>
                <p className="mb-4">Contact us today to schedule a free consultation and find the perfect tutor for your child.</p>
                <button className="w-full bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                  Schedule Consultation
                </button>
              </div>
  
              {/* Testimonials */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-3">Parent Testimonials</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 italic text-gray-600">
                    "The home tuition program has been a game-changer for my daughter. Her grades improved significantly, and she's now much more confident in her math abilities."
                    <p className="mt-2 text-sm text-gray-500 not-italic">- Parent of 9th Grade Student</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 italic text-gray-600">
                    "Having a tutor come to our home has made learning so much more convenient. The personalized attention has helped my son overcome his math anxiety."
                    <p className="mt-2 text-sm text-gray-500 not-italic">- Parent of 7th Grade Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p>© 2025 Ashwanth Maths. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default HomePersonalTuition;