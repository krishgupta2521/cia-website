'use client';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent fontawesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CyberSecure - Cybersecurity Community & Services</title>
        <meta name="description" content="Advanced cybersecurity solutions and community resources to defend against evolving threats" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}