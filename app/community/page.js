'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faChalkboardTeacher, faComments, 
         faLightbulb, faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function Community() {
  return (
    <main className="scanlines">
      {/* Hero Section */}
      <section className="hero relative py-20 md:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-secondary font-mono text-sm mb-4">[root@cybersecure ~]$ ./join_community.sh</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 terminal-text font-mono">
            &gt; JOIN OUR <span className="gradient-text glitch-text" data-text="CYBERSECURITY">CYBERSECURITY</span> COMMUNITY
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-text-secondary font-mono leading-relaxed mb-8">
            // Connect with security professionals, share knowledge, and access exclusive resources 
            to enhance your cybersecurity expertise
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="#join-form" 
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
            >
              [Become a Member]
            </Link>
            <div className="text-text-muted font-mono text-sm flex items-center gap-2">
              <span className="text-primary animate-pulse">●</span> 
              <span className="terminal-cursor">Members online: 1,337</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-darker-bg relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 terminal-text font-mono">
            <span className="text-secondary">//</span> COMMUNITY BENEFITS
          </h2>
          <p className="text-center text-text-muted mb-16 font-mono">[ Access Granted: Level 1 ]</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="modern-card p-6 group">
              <div className="text-primary mb-4 flex items-center justify-between">
                <FontAwesomeIcon icon={faUsers} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x01]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Professional_Network</h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                &gt; Connect with cybersecurity professionals, industry leaders, and fellow enthusiasts 
                to build valuable relationships and expand your professional network.
              </p>
            </div>
            
            <div className="modern-card p-6 group">
              <div className="text-secondary mb-4 flex items-center justify-between">
                <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x02]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Exclusive_Events</h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                &gt; Gain access to member-only webinars, workshops, and conferences featuring industry experts 
                and the latest security research and developments.
              </p>
            </div>
            
            <div className="modern-card p-6 group">
              <div className="text-primary mb-4 flex items-center justify-between">
                <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x03]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Training_Resources</h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                &gt; Access specialized training materials, certification preparation resources, and 
                hands-on labs to enhance your security skills.
              </p>
            </div>
            
            <div className="modern-card p-6 group">
              <div className="text-secondary mb-4 flex items-center justify-between">
                <FontAwesomeIcon icon={faComments} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x04]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Discussion_Forums</h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                &gt; Participate in moderated forums where you can ask questions, share insights, 
                and discuss the latest cybersecurity trends and challenges.
              </p>
            </div>
            
            <div className="modern-card p-6 group">
              <div className="text-primary mb-4 flex items-center justify-between">
                <FontAwesomeIcon icon={faLightbulb} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x05]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Research_Collaboration</h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                &gt; Collaborate on security research projects, vulnerability disclosure, and 
                contribute to the advancement of cybersecurity knowledge.
              </p>
            </div>
            
            <div className="modern-card p-6 group">
              <div className="text-secondary mb-4 flex items-center justify-between">
                <FontAwesomeIcon icon={faNewspaper} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x06]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Exclusive_Content</h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                &gt; Receive our members-only newsletter with curated security news, tool recommendations, 
                and early access to our latest research findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 terminal-text font-mono">
            <span className="text-secondary">//</span> UPCOMING EVENTS
          </h2>
          <p className="text-center text-text-muted mb-16 font-mono">[ Scheduled Sessions ]</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="event-date mb-4 text-secondary font-mono text-sm border-b border-primary/20 pb-2">
                [ 2025-11-05 ] :: 14:00 UTC
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Advanced_Threat_Hunting</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Learn advanced techniques for identifying and tracking sophisticated cyber threats in your environment.
              </p>
              <div className="event-details mb-4 space-y-1 font-mono text-xs text-text-muted">
                <p><span className="text-primary">Format:</span> Virtual_Workshop</p>
                <p><span className="text-primary">Duration:</span> 3_hours</p>
                <p><span className="text-primary">Speaker:</span> Alex_Morgan</p>
              </div>
              <Link href="#" className="text-secondary hover:text-primary font-mono text-sm inline-flex items-center gap-2">
                [Register] →
              </Link>
            </div>
            
            <div className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="event-date mb-4 text-secondary font-mono text-sm border-b border-primary/20 pb-2">
                [ 2025-11-18 ] :: 16:00 UTC
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Cybersecurity_Career_Panel</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Industry professionals share insights on career paths, skills development, and job opportunities in cybersecurity.
              </p>
              <div className="event-details mb-4 space-y-1 font-mono text-xs text-text-muted">
                <p><span className="text-primary">Format:</span> Live_Panel_Discussion</p>
                <p><span className="text-primary">Duration:</span> 2_hours</p>
                <p><span className="text-primary">Panelists:</span> Security_Leaders</p>
              </div>
              <Link href="#" className="text-secondary hover:text-primary font-mono text-sm inline-flex items-center gap-2">
                [Register] →
              </Link>
            </div>
            
            <div className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="event-date mb-4 text-secondary font-mono text-sm border-b border-primary/20 pb-2">
                [ 2025-12-10 ] :: 09:00 UTC
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Annual_Security_Conference</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Our flagship event featuring keynote speakers, technical sessions, and networking opportunities.
              </p>
              <div className="event-details mb-4 space-y-1 font-mono text-xs text-text-muted">
                <p><span className="text-primary">Format:</span> In-Person_Conference</p>
                <p><span className="text-primary">Duration:</span> 2_days</p>
                <p><span className="text-primary">Location:</span> Tech_Convention_Center</p>
                </div>
              <Link href="#" className="text-secondary hover:text-primary font-mono text-sm inline-flex items-center gap-2">
                [Learn More] →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="text-secondary hover:text-primary font-mono text-sm uppercase tracking-wider">
              &gt; View_All_Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join-form" className="py-20 bg-darker-bg relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-secondary font-mono text-sm mb-2 text-center">/** REGISTRATION_FORM **/</div>
            <h2 className="text-4xl font-bold text-center mb-4 terminal-text font-mono">
              &gt; BECOME A COMMUNITY MEMBER
            </h2>
            <p className="text-text-secondary text-center mb-8 font-mono text-sm">
              // Join our growing community of cybersecurity professionals and enthusiasts. 
              Membership is free for basic access, with premium options for additional benefits.
            </p>
            
            <form className="modern-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-primary font-mono text-sm mb-2" htmlFor="first-name">
                    &gt; First_Name:
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 bg-black border-2 border-primary/30 text-primary font-mono focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                    placeholder="[ENTER_FIRST_NAME]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary font-mono text-sm mb-2" htmlFor="last-name">
                    &gt; Last_Name:
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 bg-black border-2 border-primary/30 text-primary font-mono focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                    placeholder="[ENTER_LAST_NAME]"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-primary font-mono text-sm mb-2" htmlFor="email">
                  &gt; Email_Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border-2 border-primary/30 text-primary font-mono focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="[YOUR_EMAIL@DOMAIN.COM]"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-primary font-mono text-sm mb-2" htmlFor="expertise">
                  &gt; Area_of_Expertise:
                </label>
                <select
                  id="expertise"
                  className="w-full px-4 py-3 bg-black border-2 border-primary/30 text-primary font-mono focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                  required
                >
                  <option value="">[ SELECT_OPTION ]</option>
                  <option value="network-security">Network_Security</option>
                  <option value="application-security">Application_Security</option>
                  <option value="cloud-security">Cloud_Security</option>
                  <option value="incident-response">Incident_Response</option>
                  <option value="digital-forensics">Digital_Forensics</option>
                  <option value="security-architecture">Security_Architecture</option>
                  <option value="security-operations">Security_Operations</option>
                  <option value="governance-risk-compliance">GRC</option>
                  <option value="student">Student_/_Learning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-primary font-mono text-sm mb-3">
                  &gt; Membership_Type:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-primary/30 p-4 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                    <input
                      type="radio"
                      id="basic"
                      name="membership-type"
                      value="basic"
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="basic" className="cursor-pointer font-mono">
                      <span className="font-bold text-primary block mb-2">[BASIC_MEMBERSHIP]</span>
                      <p className="text-xs text-text-secondary">Free access to community forums and selected resources</p>
                    </label>
                  </div>
                  <div className="border-2 border-secondary/30 p-4 cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all">
                    <input
                      type="radio"
                      id="premium"
                      name="membership-type"
                      value="premium"
                      className="mr-2"
                    />
                    <label htmlFor="premium" className="cursor-pointer font-mono">
                      <span className="font-bold text-secondary block mb-2">[PREMIUM_MEMBERSHIP]</span>
                      <p className="text-xs text-text-secondary">Full access to all resources, events and training ($99/year)</p>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-start font-mono text-sm">
                  <input
                    type="checkbox"
                    className="mr-3 mt-1"
                    required
                  />
                  <span className="text-text-secondary">
                    I agree to the <a href="#" className="text-primary hover:text-secondary">Terms_of_Service</a> and <a href="#" className="text-primary hover:text-secondary">Privacy_Policy</a>
                  </span>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-4 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
                >
                  [SUBMIT_REGISTRATION]
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-text-muted font-mono text-xs">
                  &gt; Processing secure connection<span className="animate-terminal-blink">_</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}