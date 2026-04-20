import { motion } from 'motion/react';
import { Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=100&w=2000" 
          alt="Modern Home Security" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Excellence in Security</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            ADVANCED <br />
            <span className="gold-text-gradient italic">AUTOMATION</span> <br />
            FOR GHANA.
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Leading the way in premium security systems and AI-powered automation. Protect your property with Ghana's most trusted security experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded-full group"
            >
              Explore Services
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 glass text-white hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-bold rounded-full"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-end items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
            <div className="relative glass-card-gold p-12 rounded-full border-2 border-gold/30">
              <Shield size={120} className="text-gold" />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-12 glass p-4 rounded-2xl"
            >
              <p className="text-gold font-display font-bold text-2xl">500+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Projects Done</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-12 glass p-4 rounded-2xl"
            >
              <p className="text-gold font-display font-bold text-2xl">24/7</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Support Ready</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <div className="h-10 w-[1px] bg-gold/50" />
      </motion.div>
    </section>
  );
}
