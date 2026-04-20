import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                 <span className="text-black font-display font-bold">D</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase">
                DGL <span className="text-gold">Automation</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ghana's premier security and automation provider. We deliver excellence through innovation and dedicated engineering.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-card rounded-md text-gray-400 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 glass-card rounded-md text-gray-400 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 glass-card rounded-md text-gray-400 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 glass-card rounded-md text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-gold text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-gold text-sm transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gold text-sm transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-gold text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-500 hover:text-gold text-sm transition-colors">Gate Openers</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gold text-sm transition-colors">CCTV Systems</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gold text-sm transition-colors">Electric Fencing</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gold text-sm transition-colors">AI Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Stay updated with our latest security tips and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-l-sm px-4 py-2 text-sm outline-none focus:border-gold w-full"
              />
              <button className="bg-gold text-black px-4 py-2 rounded-r-sm font-bold text-xs uppercase transition-colors hover:bg-gold-light">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {currentYear} DGL Automation Ghana. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
