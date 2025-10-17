'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm text-primary shadow-glow border-b-2 border-primary/30 sticky top-0 z-50 scanlines">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold group flex items-center gap-2">
            <span className="text-primary">[</span>
            <span className="gradient-text terminal-text">Cyber</span>
            <span className="text-secondary group-hover:text-secondary transition-colors">Secure</span>
            <span className="text-primary">]</span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-primary hover:text-secondary transition-colors border border-primary/50 p-2"
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
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="hover:text-secondary transition-colors font-mono text-sm uppercase tracking-wider relative group">
              <span className="group-hover:text-shadow-glow">&gt; Home</span>
            </Link></li>
            <li><Link href="/community" className="hover:text-secondary transition-colors font-mono text-sm uppercase tracking-wider relative group">
              <span className="group-hover:text-shadow-glow">&gt; Community</span>
            </Link></li>
            <li className="relative group">
              <Link href="/services" className="hover:text-secondary transition-colors font-mono text-sm uppercase tracking-wider">
                &gt; Services
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-black border-2 border-primary/50 shadow-glow py-2 z-10 hidden group-hover:block">
                <Link href="/services#cybersecurity" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-secondary transition-colors font-mono">&gt; Cybersecurity</Link>
                <Link href="/services#digital-forensics" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-secondary transition-colors font-mono">&gt; Digital Forensics</Link>
              </div>
            </li>
            <li><Link href="/blog" className="hover:text-secondary transition-colors font-mono text-sm uppercase tracking-wider relative group">
              <span className="group-hover:text-shadow-glow">&gt; Resources</span>
            </Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors font-mono text-sm uppercase tracking-wider relative group">
              <span className="group-hover:text-shadow-glow">&gt; About</span>
            </Link></li>
            <li>
              <Link href="/contact" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black px-4 py-2 transition-all font-mono text-sm uppercase tracking-wider shadow-glow hover:shadow-neon">
                [Contact]
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-2 border-primary/30">
          <ul className="px-4 pt-2 pb-4 space-y-2 font-mono">
            <li><Link href="/" className="block py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>&gt; Home</Link></li>
            <li><Link href="/community" className="block py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>&gt; Community</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>&gt; Services</Link></li>
            <li className="pl-4"><Link href="/services#cybersecurity" className="block py-2 text-text-secondary hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>-- Cybersecurity</Link></li>
            <li className="pl-4"><Link href="/services#digital-forensics" className="block py-2 text-text-secondary hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>-- Digital Forensics</Link></li>
            <li><Link href="/blog" className="block py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>&gt; Resources</Link></li>
            <li><Link href="/about" className="block py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>&gt; About</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>&gt; Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}