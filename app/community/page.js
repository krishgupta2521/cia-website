'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faChalkboardTeacher, faComments, 
         faLightbulb, faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function Community() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Cybersecurity Community</h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-300">
            Connect with security professionals, share knowledge, and access exclusive resources 
            to enhance your cybersecurity expertise
          </p>
          <div className="mt-8">
            <Link 
              href="#join-form" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Community Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="benefit-card p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Network</h3>
              <p className="text-gray-600">
                Connect with cybersecurity professionals, industry leaders, and fellow enthusiasts 
                to build valuable relationships and expand your professional network.
              </p>
            </div>
            
            <div className="benefit-card p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Events</h3>
              <p className="text-gray-600">
                Gain access to member-only webinars, workshops, and conferences featuring industry experts 
                and the latest security research and developments.
              </p>
            </div>
            
            <div className="benefit-card p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-3">Training Resources</h3>
              <p className="text-gray-600">
                Access specialized training materials, certification preparation resources, and 
                hands-on labs to enhance your security skills.
              </p>
            </div>
            
            <div className="benefit-card p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon icon={faComments} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-3">Discussion Forums</h3>
              <p className="text-gray-600">
                Participate in moderated forums where you can ask questions, share insights, 
                and discuss the latest cybersecurity trends and challenges.
              </p>
            </div>
            
            <div className="benefit-card p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-3">Research Collaboration</h3>
              <p className="text-gray-600">
                Collaborate on security research projects, vulnerability disclosure, and 
                contribute to the advancement of cybersecurity knowledge.
              </p>
            </div>
            
            <div className="benefit-card p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon icon={faNewspaper} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Content</h3>
              <p className="text-gray-600">
                Receive our members-only newsletter with curated security news, tool recommendations, 
                and early access to our latest research findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Community Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="event-card bg-white p-6 rounded-lg shadow-md">
              <div className="event-date mb-4 text-blue-600 font-bold">November 5, 2025</div>
              <h3 className="text-xl font-bold mb-2">Advanced Threat Hunting Workshop</h3>
              <p className="text-gray-600 mb-4">
                Learn advanced techniques for identifying and tracking sophisticated cyber threats in your environment.
              </p>
              <div className="event-details mb-4">
                <p className="text-gray-500"><strong>Format:</strong> Virtual Workshop</p>
                <p className="text-gray-500"><strong>Duration:</strong> 3 hours</p>
                <p className="text-gray-500"><strong>Speaker:</strong> Alex Morgan, Threat Intelligence Analyst</p>
              </div>
              <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">Register →</Link>
            </div>
            
            <div className="event-card bg-white p-6 rounded-lg shadow-md">
              <div className="event-date mb-4 text-blue-600 font-bold">November 18, 2025</div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity Career Panel</h3>
              <p className="text-gray-600 mb-4">
                Industry professionals share insights on career paths, skills development, and job opportunities in cybersecurity.
              </p>
              <div className="event-details mb-4">
                <p className="text-gray-500"><strong>Format:</strong> Live Panel Discussion</p>
                <p className="text-gray-500"><strong>Duration:</strong> 2 hours</p>
                <p className="text-gray-500"><strong>Panelists:</strong> Security leaders from various sectors</p>
              </div>
              <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">Register →</Link>
            </div>
            
            <div className="event-card bg-white p-6 rounded-lg shadow-md">
              <div className="event-date mb-4 text-blue-600 font-bold">December 10, 2025</div>
              <h3 className="text-xl font-bold mb-2">Annual Security Conference</h3>
              <p className="text-gray-600 mb-4">
                Our flagship event featuring keynote speakers, technical sessions, and networking opportunities.
              </p>
              <div className="event-details mb-4">
                <p className="text-gray-500"><strong>Format:</strong> In-Person Conference</p>
                <p className="text-gray-500"><strong>Duration:</strong> 2 days</p>
                <p className="text-gray-500"><strong>Location:</strong> Tech Convention Center</p>
              </div>
              <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">View All Events →</Link>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Become a Community Member</h2>
            <p className="text-gray-600 text-center mb-8">
              Join our growing community of cybersecurity professionals and enthusiasts. 
              Membership is free for basic access, with premium options for additional benefits.
            </p>
            
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="expertise">
                  Area of Expertise/Interest
                </label>
                <select
                  id="expertise"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="network-security">Network Security</option>
                  <option value="application-security">Application Security</option>
                  <option value="cloud-security">Cloud Security</option>
                  <option value="incident-response">Incident Response</option>
                  <option value="digital-forensics">Digital Forensics</option>
                  <option value="security-architecture">Security Architecture</option>
                  <option value="security-operations">Security Operations</option>
                  <option value="governance-risk-compliance">Governance, Risk & Compliance</option>
                  <option value="student">Student / Learning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="membership-type">
                  Membership Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 cursor-pointer hover:bg-blue-50">
                    <input
                      type="radio"
                      id="basic"
                      name="membership-type"
                      value="basic"
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="basic" className="cursor-pointer">
                      <span className="font-bold">Basic Membership</span>
                      <p className="text-sm text-gray-600 mt-1">Free access to community forums and selected resources</p>
                    </label>
                  </div>
                  <div className="border rounded-md p-4 cursor-pointer hover:bg-blue-50">
                    <input
                      type="radio"
                      id="premium"
                      name="membership-type"
                      value="premium"
                      className="mr-2"
                    />
                    <label htmlFor="premium" className="cursor-pointer">
                      <span className="font-bold">Premium Membership</span>
                      <p className="text-sm text-gray-600 mt-1">Full access to all resources, events and training ($99/year)</p>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    required
                  />
                  <span className="text-gray-700">
                    I agree to the <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                  </span>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300"
                >
                  Join Community
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}