import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Connect With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              START YOUR <br />
              <span className="text-gold">PROTECTION</span> JOURNEY.
            </h2>
            <p className="text-gray-400 mb-12 max-w-lg">
              Ready to automate your home or secure your commercial property? Reach out to our team of experts for a customized quote and consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="p-4 glass-card rounded-full text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-xl font-bold">+233 24 000 0000</p>
                  <p className="text-xl font-bold">+233 50 000 0000</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 glass-card rounded-full text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-xl font-bold">info@dglautomation.com</p>
                  <p className="text-xl font-bold">sales@dglautomation.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 glass-card rounded-full text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Our Location</h4>
                  <p className="text-xl font-bold">East Legon, Accra</p>
                  <p className="text-lg text-gray-400">Ghana, West Africa</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-2xl border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-gold outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+233..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-gold outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-gray-400">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-gold outline-none transition-all text-gray-400 appearance-none">
                  <option>Automated Gate Opener</option>
                  <option>CCTV Installation</option>
                  <option>Electric Fencing</option>
                  <option>EM Lock Systems</option>
                  <option>AI Services</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-gold outline-none transition-all placeholder:text-gray-600 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3 rounded-full"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
