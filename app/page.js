'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSearch, faUsers, faGraduationCap, 
         faLock, faCode, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="relative scanlines">
      {/* Hero Section */}
      <section className="hero relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="mb-4 text-secondary font-mono text-sm">[root@cybersecure ~]$ ./init_security.sh</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight terminal-text">
              &gt; Protecting Your <span className="gradient-text glitch-text" data-text="Digital World">Digital World</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-secondary max-w-2xl font-mono">
              // Advanced cybersecurity solutions and community resources to defend against evolving threats
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
              >
                [Explore Services]
              </Link>
              <Link 
                href="/community" 
                className="bg-transparent hover:bg-primary/10 text-primary font-bold py-3 px-8 border-2 border-primary/50 transition-all font-mono uppercase tracking-wider"
              >
                [Join Community]
              </Link>
            </div>
            <div className="mt-8 text-text-muted font-mono text-sm terminal-cursor">
              System ready...
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-20 relative bg-darker-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 terminal-text font-mono">
            <span className="text-secondary">//</span> WHAT WE OFFER
          </h2>
          <p className="text-center text-text-muted mb-16 font-mono">[ Core Services & Solutions ]</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="modern-card p-6">
              <div className="text-primary mb-4 flex items-center gap-3">
                <FontAwesomeIcon icon={faShieldAlt} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x01]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Cybersecurity_Services</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Comprehensive security assessments, vulnerability management, and threat protection solutions
              </p>
              <Link href="/services#cybersecurity" className="text-secondary hover:text-primary font-mono inline-flex items-center gap-2 text-sm">
                [Learn More] →
              </Link>
            </div>
            
            <div className="modern-card p-6">
              <div className="text-secondary mb-4 flex items-center gap-3">
                <FontAwesomeIcon icon={faSearch} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x02]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Digital_Forensics</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Advanced forensic analysis, incident response, and data recovery services
              </p>
              <Link href="/services#digital-forensics" className="text-secondary hover:text-primary font-mono inline-flex items-center gap-2 text-sm">
                [Learn More] →
              </Link>
            </div>
            
            <div className="modern-card p-6">
              <div className="text-primary mb-4 flex items-center gap-3">
                <FontAwesomeIcon icon={faUsers} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x03]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Community_Hub</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Join our thriving community of security professionals, researchers, and enthusiasts
              </p>
              <Link href="/community" className="text-secondary hover:text-primary font-mono inline-flex items-center gap-2 text-sm">
                [Learn More] →
              </Link>
            </div>
            
            <div className="modern-card p-6">
              <div className="text-secondary mb-4 flex items-center gap-3">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="animate-pulse" />
                <span className="text-secondary font-mono text-xs">[0x04]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono text-primary">Training_&_Resources</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Access expert training materials, blogs, and tools to enhance your security knowledge
              </p>
              <Link href="/blog" className="text-secondary hover:text-primary font-mono inline-flex items-center gap-2 text-sm">
                [Learn More] →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview py-20 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-secondary font-mono text-sm mb-2">/** ABOUT_US **/</div>
              <h2 className="text-4xl font-bold mb-6 terminal-text font-mono">
                &lt; <span className="gradient-text">CyberSecure</span> /&gt;
              </h2>
              <p className="text-text-secondary mb-4 leading-relaxed font-mono text-sm">
                // CyberSecure is a leading cybersecurity community and service provider focused on 
                delivering cutting-edge security solutions and fostering knowledge sharing in the 
                field of information security.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed font-mono text-sm">
                // Our team of certified security experts is dedicated to protecting organizations 
                and individuals from cyber threats through innovative technologies and best practices.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
              >
                [Learn More About Us]
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card h-[300px] md:h-[400px] w-full overflow-hidden relative border-2 border-primary/30">
                <div className="absolute top-2 left-2 text-primary font-mono text-xs z-10">image.render()</div>
                <Image 
                  src="/images/cybersecurity-team.jpg"
                  alt="CyberSecure Team"
                  layout="fill" 
                  objectFit="cover"
                />
                <div className="absolute bottom-2 right-2 text-primary font-mono text-xs z-10">[OK]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview py-20 bg-darker-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 terminal-text font-mono">
            <span className="text-secondary">//</span> OUR SERVICES
          </h2>
          <p className="text-center text-text-muted mb-16 font-mono">[ Advanced Security Solutions ]</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card hover:border-primary transition-all group">
              <div className="w-16 h-16 bg-transparent border-2 border-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-neon transition-all">
                <FontAwesomeIcon icon={faLock} size="lg" className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center font-mono text-primary">Penetration_Testing</h3>
              <p className="text-text-secondary text-center font-mono text-sm">
                &gt; Identify vulnerabilities in your systems before hackers do with our comprehensive penetration testing services.
              </p>
            </div>
            
            <div className="glass-card hover:border-secondary transition-all group">
              <div className="w-16 h-16 bg-transparent border-2 border-secondary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-cyan transition-all">
                <FontAwesomeIcon icon={faCode} size="lg" className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center font-mono text-primary">Secure_Development</h3>
              <p className="text-text-secondary text-center font-mono text-sm">
                &gt; Build security into your software from the ground up with our secure development practices.
              </p>
            </div>
            
            <div className="glass-card hover:border-primary transition-all group">
              <div className="w-16 h-16 bg-transparent border-2 border-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-neon transition-all">
                <FontAwesomeIcon icon={faServer} size="lg" className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center font-mono text-primary">Network_Security</h3>
              <p className="text-text-secondary text-center font-mono text-sm">
                &gt; Protect your network infrastructure with advanced monitoring and defense systems.
              </p>
            </div>
            
            <div className="glass-card hover:border-secondary transition-all group">
              <div className="w-16 h-16 bg-transparent border-2 border-secondary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-cyan transition-all">
                <FontAwesomeIcon icon={faDatabase} size="lg" className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center font-mono text-primary">Data_Recovery</h3>
              <p className="text-text-secondary text-center font-mono text-sm">
                &gt; Recover lost or compromised data with our forensic data recovery services.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
            >
              [View All Services]
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-20 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 terminal-text font-mono">
            <span className="text-secondary">//</span> CLIENT FEEDBACK
          </h2>
          <p className="text-center text-text-muted mb-16 font-mono">[ Success Stories ]</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="modern-card p-8">
              <div className="testimonial-content mb-6">
                <p className="italic text-text-secondary">
                  "CyberSecure's penetration testing team identified critical vulnerabilities in our 
                  infrastructure that we had overlooked for years. Their detailed remediation guidance was invaluable."
                </p>
              </div>
              <div className="testimonial-author flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-primary">
                  <Image 
                    src="/images/testimonial-1.jpg" 
                    alt="John Smith"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-sm text-text-muted">CTO, TechCorp Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-8 rounded-xl">
              <div className="testimonial-content mb-6">
                <p className="italic text-text-secondary">
                  "After experiencing a ransomware attack, CyberSecure's digital forensics team helped us 
                  recover our critical data and strengthen our security posture to prevent future incidents."
                </p>
              </div>
              <div className="testimonial-author flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-primary">
                  <Image 
                    src="/images/testimonial-2.jpg" 
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-text-muted">IT Director, Healthcare Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-8 rounded-xl">
              <div className="testimonial-content mb-6">
                <p className="italic text-text-secondary font-mono text-sm leading-relaxed">
                  "Being part of the CyberSecure community has been an invaluable resource for our security team. 
                  The knowledge sharing and support from experts has elevated our entire security program."
                </p>
              </div>
              <div className="testimonial-author flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/50">
                  <Image 
                    src="/images/testimonial-3.jpg" 
                    alt="Mike Reynolds"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold font-mono text-primary">Mike_Reynolds</h4>
                  <p className="text-sm text-text-muted font-mono">Security Manager @ Global Finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta py-20 relative overflow-hidden bg-darker-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-secondary font-mono text-sm mb-2">$ sudo ./enhance_security.sh --now</div>
          <h2 className="text-4xl font-bold mb-4 terminal-text font-mono">
            &gt; READY TO ENHANCE YOUR SECURITY<span className="animate-terminal-blink">?</span>
          </h2>
          <p className="text-xl mb-8 text-text-secondary font-mono">
            // Contact our team for a free security consultation or join our community today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-secondary text-black font-bold py-3 px-8 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
            >
              [Get in Touch]
            </Link>
            <Link 
              href="/community" 
              className="bg-transparent hover:bg-primary/10 border-2 border-primary text-primary font-bold py-3 px-8 transition-all font-mono uppercase tracking-wider"
            >
              [Join Community]
            </Link>
          </div>
          <div className="mt-8 text-text-muted font-mono text-sm">
            &gt; Initializing secure connection<span className="animate-terminal-blink">_</span>
          </div>
        </div>
      </section>
    </main>
  );
}