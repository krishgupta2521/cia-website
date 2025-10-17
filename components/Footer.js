'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-primary pt-16 pb-6 border-t-2 border-primary/30 relative scanlines">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-logo">
            <Link href="/" className="text-2xl font-bold group flex items-center gap-2 mb-4">
              <span className="text-primary">[</span>
              <span className="gradient-text terminal-text">Cyber</span>
              <span className="text-secondary group-hover:text-secondary transition-colors">Secure</span>
              <span className="text-primary">]</span>
            </Link>
            <p className="mt-4 text-text-secondary leading-relaxed font-mono text-sm">
              // Protecting your digital world with cutting-edge cybersecurity services and community resources.
            </p>
            <div className="mt-4 text-text-muted font-mono text-xs">
              &gt; System online: <span className="text-primary">24/7</span>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="text-xl font-semibold mb-4 font-mono text-primary border-b border-primary/30 pb-2">
              [Quick_Links]
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li><Link href="/" className="text-text-secondary hover:text-primary transition-colors">&gt; Home</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-primary transition-colors">&gt; Services</Link></li>
              <li><Link href="/community" className="text-text-secondary hover:text-primary transition-colors">&gt; Community</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-primary transition-colors">&gt; Resources</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors">&gt; About</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">&gt; Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h3 className="text-xl font-semibold mb-4 font-mono text-primary border-b border-primary/30 pb-2">
              [Services]
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li><Link href="/services#penetration-testing" className="text-text-secondary hover:text-primary transition-colors">&gt; Penetration_Testing</Link></li>
              <li><Link href="/services#vulnerability-assessment" className="text-text-secondary hover:text-primary transition-colors">&gt; Vulnerability_Assessment</Link></li>
              <li><Link href="/services#incident-response" className="text-text-secondary hover:text-primary transition-colors">&gt; Incident_Response</Link></li>
              <li><Link href="/services#digital-forensics" className="text-text-secondary hover:text-primary transition-colors">&gt; Digital_Forensics</Link></li>
              <li><Link href="/services#security-training" className="text-text-secondary hover:text-primary transition-colors">&gt; Security_Training</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="text-xl font-semibold mb-4 font-mono text-primary border-b border-primary/30 pb-2">
              [Contact_Us]
            </h3>
            <p className="flex items-start mb-3 text-text-secondary font-mono text-sm">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-primary mt-1" /> 
              <span>123 Security Ave<br/>Cybertown, CT 10101</span>
            </p>
            <p className="flex items-center mb-3 text-text-secondary font-mono text-sm">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-primary" /> 
              +1 (555) 123-4567
            </p>
            <p className="flex items-center mb-4 text-text-secondary font-mono text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-primary" /> 
              info@cybersecure.com
            </p>
            <div className="social-icons flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-primary/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center font-mono text-sm">
          <p className="text-text-muted">
            <span className="text-primary">&copy;</span> 2025 CyberSecure. All rights reserved. 
            <span className="text-text-muted ml-2">| Build: v2.0.1</span>
          </p>
          <div className="footer-bottom-links mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-text-muted hover:text-primary transition-colors">&gt; Privacy_Policy</Link>
            <Link href="/terms-of-service" className="text-text-muted hover:text-primary transition-colors">&gt; Terms_of_Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}