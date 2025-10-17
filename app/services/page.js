'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faCode, faServer, faSearch, 
         faUserShield, faDesktop, faLaptopCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Security Services</h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-300">
            Comprehensive cybersecurity and digital forensics solutions designed to protect your 
            organization from evolving threats and secure your digital assets
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Security Solutions</h2>
            <p className="text-gray-600">
              Our team of certified security professionals provides end-to-end security services 
              to protect your business from modern cyber threats. We combine cutting-edge technologies 
              with proven methodologies to deliver robust security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section id="cybersecurity" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Cybersecurity Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faLock} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Penetration Testing</h3>
              <p className="text-gray-600 mb-4">
                Simulate real-world attacks to identify and address security vulnerabilities before 
                they can be exploited by malicious actors.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Web Application Testing</li>
                <li>Network Infrastructure Testing</li>
                <li>Cloud Security Assessment</li>
                <li>Mobile Application Testing</li>
                <li>IoT Device Security Testing</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faShieldAlt} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vulnerability Assessment</h3>
              <p className="text-gray-600 mb-4">
                Systematic review of security weaknesses in your systems and applications with detailed 
                remediation recommendations.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>External & Internal Vulnerability Scanning</li>
                <li>Security Configuration Review</li>
                <li>Compliance Gap Analysis</li>
                <li>Risk Assessment & Prioritization</li>
                <li>Remediation Planning</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faCode} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Development</h3>
              <p className="text-gray-600 mb-4">
                Integrate security into your software development lifecycle to build secure applications 
                from the ground up.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Secure Coding Practices</li>
                <li>Code Reviews & Security Testing</li>
                <li>SDLC Security Integration</li>
                <li>DevSecOps Implementation</li>
                <li>Security Training for Developers</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faServer} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Network Security</h3>
              <p className="text-gray-600 mb-4">
                Protect your network infrastructure with advanced monitoring, detection, and defense systems.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Firewall Implementation & Management</li>
                <li>Intrusion Detection & Prevention</li>
                <li>Network Traffic Analysis</li>
                <li>Security Architecture Design</li>
                <li>VPN & Remote Access Security</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faUserShield} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Consulting</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance to develop and implement effective security strategies tailored to your organization.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Security Program Development</li>
                <li>Policy & Procedure Creation</li>
                <li>Compliance Readiness (GDPR, HIPAA, PCI)</li>
                <li>Security Awareness Training</li>
                <li>Executive Security Briefings</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faLaptopCode} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Security</h3>
              <p className="text-gray-600 mb-4">
                Secure your cloud-based infrastructure and applications with comprehensive security measures.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Cloud Security Architecture</li>
                <li>Configuration & Access Management</li>
                <li>Cloud Vulnerability Assessment</li>
                <li>Data Protection Strategies</li>
                <li>Compliance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Forensics Services */}
      <section id="digital-forensics" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Digital Forensics Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Rapid response to security incidents to minimize damage, identify attack vectors, 
                and restore normal operations.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>24/7 Emergency Response</li>
                <li>Threat Containment & Eradication</li>
                <li>Root Cause Analysis</li>
                <li>Evidence Preservation</li>
                <li>Post-Incident Recovery</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faDesktop} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Computer Forensics</h3>
              <p className="text-gray-600 mb-4">
                Thorough investigation and analysis of digital devices to recover evidence and document findings.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Data Recovery & Analysis</li>
                <li>Deleted File Recovery</li>
                <li>User Activity Timeline Reconstruction</li>
                <li>Forensic Imaging</li>
                <li>Expert Witness Testimony</li>
              </ul>
            </div>
            
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FontAwesomeIcon icon={faNetworkWired} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-3">Network Forensics</h3>
              <p className="text-gray-600 mb-4">
                Analyze network traffic and logs to track suspicious activities and identify security breaches.
              </p>
              <ul className="text-gray-600 mb-4 list-disc list-inside">
                <li>Traffic Analysis & Monitoring</li>
                <li>Log Collection & Analysis</li>
                <li>Intrusion Detection</li>
                <li>Attack Pattern Identification</li>
                <li>Network Security Recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Security Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our security experts can develop tailored security programs to address your specific 
            business requirements and security challenges.
          </p>
          <a 
            href="/contact" 
            className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-8 rounded-md transition duration-300"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}