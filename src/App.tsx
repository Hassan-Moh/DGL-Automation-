/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] mesh-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
