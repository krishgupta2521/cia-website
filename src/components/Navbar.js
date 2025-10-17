'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState('CyberSec');
  
  // Matrix-style typing effect for logo
  useEffect(() => {
    const texts = ['CyberSec', 'C:\\>_', 'H4x0r', 'CyberSec'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      
      // Simulate glitching effect
      setDisplayText('');
      setTimeout(() => {
        setDisplayText(texts[currentIndex]);
      }, 100);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-black border-b border-neon-green text-neon-green shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold font-mono flex items-center">
            <span className="terminal-text mr-1">&gt;</span>
            <span className="typing-effect overflow-hidden inline-block" style={{maxWidth: '150px'}}>
              {displayText}
            </span>
            <span className="terminal-text ml-1 animate-pulse">_</span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none hacker-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            )}
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-mono">
            <li><Link href="/" className="nav-link hover:text-neon-green transition-colors">/home</Link></li>
            <li><Link href="/community" className="nav-link hover:text-neon-green transition-colors">/community</Link></li>
            <li className="relative group">
              <Link href="/services" className="nav-link hover:text-neon-green transition-colors">/services</Link>
              <div className="absolute left-0 mt-2 w-60 bg-black border border-neon-green rounded-none shadow-lg py-1 z-10 hidden group-hover:block">
                <div className="border-b border-neon-green px-4 py-2 text-sm opacity-60">// select service</div>
                <Link href="/services#cybersecurity" className="block px-4 py-2 text-sm hover:bg-terminal-bg">
                  <span className="opacity-60">01.</span> cybersecurity
                </Link>
                <Link href="/services#digital-forensics" className="block px-4 py-2 text-sm hover:bg-terminal-bg">
                  <span className="opacity-60">02.</span> digital-forensics
                </Link>
              </div>
            </li>
            <li><Link href="/blog" className="nav-link hover:text-neon-green transition-colors">/resources</Link></li>
            <li><Link href="/about" className="nav-link hover:text-neon-green transition-colors">/about</Link></li>
            <li><Link href="/contact" className="nav-link hover:text-neon-green transition-colors">/contact</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-neon-green">
          <div className="border-b border-neon-green px-4 py-2 text-sm opacity-60 font-mono">// navigation</div>
          <ul className="px-4 pt-2 pb-4 space-y-2 font-mono">
            <li><Link href="/" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
              <span className="opacity-60">01.</span> /home
            </Link></li>
            <li><Link href="/community" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
              <span className="opacity-60">02.</span> /community
            </Link></li>
            <li><Link href="/services" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
              <span className="opacity-60">03.</span> /services
            </Link></li>
            <li className="pl-4"><Link href="/services#cybersecurity" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
               cybersecurity
            </Link></li>
            <li className="pl-4"><Link href="/services#digital-forensics" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
               digital-forensics
            </Link></li>
            <li><Link href="/blog" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
              <span className="opacity-60">04.</span> /resources
            </Link></li>
            <li><Link href="/about" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
              <span className="opacity-60">05.</span> /about
            </Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-neon-green" onClick={() => setIsOpen(false)}>
              <span className="opacity-60">06.</span> /contact
            </Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
