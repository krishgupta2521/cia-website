'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-logo">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-blue-400">Cyber</span>Secure
            </Link>
            <p className="mt-4 text-gray-400">
              Protecting your digital world with cutting-edge cybersecurity services and community resources.
            </p>
          </div>
          
          <div className="footer-links">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-blue-400 transition-colors">Community</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#penetration-testing" className="text-gray-400 hover:text-blue-400 transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services#vulnerability-assessment" className="text-gray-400 hover:text-blue-400 transition-colors">Vulnerability Assessment</Link></li>
              <li><Link href="/services#incident-response" className="text-gray-400 hover:text-blue-400 transition-colors">Incident Response</Link></li>
              <li><Link href="/services#digital-forensics" className="text-gray-400 hover:text-blue-400 transition-colors">Digital Forensics</Link></li>
              <li><Link href="/services#security-training" className="text-gray-400 hover:text-blue-400 transition-colors">Security Training</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center mb-3 text-gray-400">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-blue-400" /> 
              123 Security Ave, Cybertown, CT 10101
            </p>
            <p className="flex items-center mb-3 text-gray-400">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-400" /> 
              +1 (555) 123-4567
            </p>
            <p className="flex items-center mb-4 text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-400" /> 
              info@cybersecure.com
            </p>
            <div className="social-icons flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; 2025 CyberSecure. All rights reserved.</p>
          <div className="footer-bottom-links mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}