'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-black text-primary pt-12 pb-6 border-t-2 border-primary/30 relative scanlines">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-15"></div>

      {/* Neon gradient bar */}
      <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-70 absolute top-0 left-0" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="footer-logo">
            <Link href="/" className="text-2xl font-bold group inline-flex items-center gap-2 mb-3">
              <span className="text-primary">[</span>
              <span className="gradient-text terminal-text">Cyber</span>
              <span className="text-secondary group-hover:text-secondary transition-colors">Secure</span>
              <span className="text-primary">]</span>
            </Link>
            <p className="mt-3 text-text-secondary leading-relaxed font-mono text-sm">
              // Protecting your digital world with cutting-edge cybersecurity services and community resources.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-text-muted font-mono text-xs border border-primary/30 px-2 py-1 bg-black/40">
              <span className="text-primary">●</span> Status: <span className="text-primary">ONLINE</span> | Uptime: <span className="text-primary">24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="footer-links" aria-label="Quick Links">
            <h3 className="text-xl font-semibold mb-4 font-mono text-primary border-b border-primary/30 pb-2">
              [Quick_Links]
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li><Link href="/" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Home</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Services</Link></li>
              <li><Link href="/community" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Community</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Resources</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; About</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="footer-services" aria-label="Services">
            <h3 className="text-xl font-semibold mb-4 font-mono text-primary border-b border-primary/30 pb-2">
              [Services]
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li><Link href="/services#penetration-testing" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Penetration_Testing</Link></li>
              <li><Link href="/services#vulnerability-assessment" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Vulnerability_Assessment</Link></li>
              <li><Link href="/services#incident-response" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Incident_Response</Link></li>
              <li><Link href="/services#digital-forensics" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Digital_Forensics</Link></li>
              <li><Link href="/services#security-training" className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Security_Training</Link></li>
            </ul>
          </nav>

          {/* Contact */}
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
            <div className="social-icons flex space-x-3">
              <a href="#" aria-label="Facebook" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary/60" rel="noopener" >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" aria-label="Twitter" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary/60" rel="noopener" >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary/60" rel="noopener" >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" aria-label="GitHub" className="text-text-secondary hover:text-primary transition-all hover:scale-110 border border-primary/30 w-10 h-10 flex items-center justify-center hover:border-primary hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary/60" rel="noopener" >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-primary/30 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center font-mono text-sm">
          <p className="text-text-muted">
            <span className="text-primary">&copy;</span> {year} CyberSecure. All rights reserved.
            <span className="text-text-muted ml-2">| Build: v2.0.1</span>
          </p>
          <div className="footer-bottom-links mt-4 md:mt-0 flex items-center gap-4">
            <Link href="/privacy-policy" className="text-text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Privacy_Policy</Link>
            <Link href="/terms-of-service" className="text-text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-sm">&gt; Terms_of_Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
