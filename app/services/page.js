'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faCode, faServer, faSearch, 
         faUserShield, faDesktop, faLaptopCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <main className="scanlines bg-black">
      {/* Hero Section */}
      <section className="hero relative py-20 md:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-secondary font-mono text-sm mb-3">[root@cybersecure ~]$ ./services_list.sh</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 terminal-text font-mono">
            &gt; CORE <span className="gradient-text">SECURITY</span> SERVICES
          </h1>
          <p className="text-text-secondary max-w-3xl font-mono leading-relaxed">
            // Comprehensive cybersecurity and digital forensics solutions engineered to protect your assets
            and harden your attack surface against evolving threats.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-3 terminal-text font-mono"><span className="text-secondary">//</span> OVERVIEW</h2>
            <p className="text-text-secondary font-mono">
              Our certified security engineers deliver end-to-end protection with battle-tested methodologies
              and modern defensive tooling. Below is our active service catalogue.
            </p>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section id="cybersecurity" className="py-16 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center terminal-text font-mono">
            <span className="text-secondary">//</span> CYBERSECURITY_SERVICES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Penetration Testing */}
            <div id="penetration-testing" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-primary/80">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Penetration_Testing</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Simulate real-world attacks to identify exploitable weaknesses before adversaries do.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Web_Application_Testing</li>
                <li>[ ] Network_Infrastructure_Testing</li>
                <li>[ ] Cloud_Security_Assessment</li>
                <li>[ ] Mobile_App_Testing</li>
                <li>[ ] IoT_Device_Security</li>
              </ul>
            </div>

            {/* Vulnerability Assessment */}
            <div id="vulnerability-assessment" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-secondary/80">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Vulnerability_Assessment</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Systematic discovery of weaknesses with prioritized remediation guidance.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] External_&_Internal_Scanning</li>
                <li>[ ] Secure_Config_Review</li>
                <li>[ ] Compliance_Gap_Analysis</li>
                <li>[ ] Risk_Prioritization</li>
                <li>[ ] Remediation_Runbook</li>
              </ul>
            </div>

            {/* Secure Development */}
            <div id="secure-development" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-primary/80">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Secure_Development</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Shift-left security with SDLC integration and DevSecOps automation.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Secure_Coding_Practices</li>
                <li>[ ] Code_Review_&_SAST/DAST</li>
                <li>[ ] SDLC_Security_Gates</li>
                <li>[ ] DevSecOps_Pipelines</li>
                <li>[ ] Developer_Training</li>
              </ul>
            </div>

            {/* Network Security */}
            <div id="network-security" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-secondary/80">
                <FontAwesomeIcon icon={faServer} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Network_Security</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Harden network perimeters and monitor east-west traffic with precision.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Firewall_Implementation</li>
                <li>[ ] IDS/IPS_Tuning</li>
                <li>[ ] Traffic_Analysis</li>
                <li>[ ] Architecture_Design</li>
                <li>[ ] VPN_/_Remote_Security</li>
              </ul>
            </div>

            {/* Security Consulting */}
            <div id="security-consulting" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-primary/80">
                <FontAwesomeIcon icon={faUserShield} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Security_Consulting</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Strategic guidance to align security posture with business objectives.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Program_Development</li>
                <li>[ ] Policies_&_Procedures</li>
                <li>[ ] Compliance_Readiness</li>
                <li>[ ] Awareness_Training</li>
                <li>[ ] Executive_Briefings</li>
              </ul>
            </div>

            {/* Cloud Security */}
            <div id="cloud-security" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-secondary/80">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Cloud_Security</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Secure architectures, hardened configs, and continuous compliance for cloud workloads.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Cloud_Architecture</li>
                <li>[ ] Config_&_Access_Management</li>
                <li>[ ] Cloud_Vulnerability_Scans</li>
                <li>[ ] Data_Protection</li>
                <li>[ ] Compliance_Monitoring</li>
              </ul>
            </div>

            {/* Security Training (to match footer anchor) */}
            <div id="security-training" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-primary/80">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Security_Training</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Hands-on workshops and guided labs to level-up your team's security skills.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Developer_Secure_Coding</li>
                <li>[ ] Blue_Team_Fundamentals</li>
                <li>[ ] Red_Team_Methodologies</li>
                <li>[ ] Cloud_Security_Best_Practices</li>
                <li>[ ] Incident_Response_Drills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Forensics Services */}
      <section id="digital-forensics" className="py-16 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center terminal-text font-mono">
            <span className="text-secondary">//</span> DIGITAL_FORENSICS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Incident Response */}
            <div id="incident-response" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-primary/80">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Incident_Response</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Rapid containment, investigation, and recovery to minimize impact and restore operations.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] 24/7_Emergency_Response</li>
                <li>[ ] Threat_Containment_&_Eradication</li>
                <li>[ ] Root_Cause_Analysis</li>
                <li>[ ] Evidence_Preservation</li>
                <li>[ ] Post-Incident_Recovery</li>
              </ul>
            </div>

            {/* Computer Forensics */}
            <div id="computer-forensics" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-secondary/80">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Computer_Forensics</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Deep analysis and evidence recovery from compromised hosts and storage media.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Data_Recovery_&_Analysis</li>
                <li>[ ] Deleted_File_Recovery</li>
                <li>[ ] Timeline_Reconstruction</li>
                <li>[ ] Forensic_Imaging</li>
                <li>[ ] Expert_Witness_Testimony</li>
              </ul>
            </div>

            {/* Network Forensics */}
            <div id="network-forensics" className="glass-card border-primary/30 hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-black bg-primary/80">
                <FontAwesomeIcon icon={faNetworkWired} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-primary">Network_Forensics</h3>
              <p className="text-text-secondary mb-4 font-mono text-sm leading-relaxed">
                &gt; Packet and log analysis to trace attacker actions and detect lateral movement.
              </p>
              <ul className="text-text-muted font-mono text-xs space-y-1">
                <li>[ ] Traffic_Analysis_&_Monitoring</li>
                <li>[ ] Log_Collection_&_Analysis</li>
                <li>[ ] Intrusion_Detection</li>
                <li>[ ] Attack_Pattern_Identification</li>
                <li>[ ] Security_Recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4 terminal-text font-mono">&gt; Need_Custom_Security_Solutions?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto font-mono">
            // Our engineers design tailored programs aligned to your environment, risk profile, and compliance needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 transition-all hover:shadow-neon font-mono uppercase tracking-wider"
          >
            [REQUEST_CONSULTATION]
          </a>
        </div>
      </section>
    </main>
  );
}