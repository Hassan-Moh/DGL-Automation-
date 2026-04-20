import { motion } from 'motion/react';
import { Target, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users size={24} />, label: 'Happy Clients', value: '300+' },
    { icon: <Target size={24} />, label: 'Security Systems', value: '500+' },
    { icon: <Award size={24} />, label: 'Years Experience', value: '10+' },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
              alt="DGL Team Working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-gold/30 rounded-2xl hidden lg:block" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold rounded-full flex items-center justify-center animate-pulse z-20">
             <span className="text-black font-bold font-display text-4xl leading-none">D</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Who We Are</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            DEFINING THE <br />
            <span className="text-gold">FUTURE</span> OF SECURITY.
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            DGL Automation is a leading provider of innovative and reliable automation and security solutions tailored for the Ghanaian market. With over a decade of combined expertise, we integrate cutting-edge technology with local understanding to provide unparalleled protection.
          </p>

          <div className="space-y-6 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="p-3 glass rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight">{stat.value}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all font-bold uppercase tracking-widest text-sm rounded-full"
          >
            Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  );
}
