import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
             <span className="text-black font-display font-bold text-xl">D</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">
            DGL <span className="text-gold">Automation</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-gold transition-colors duration-200 uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-gold text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold-light transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display uppercase tracking-widest hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-gold text-black text-center font-bold uppercase tracking-widest"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
