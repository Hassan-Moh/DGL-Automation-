import { motion } from 'motion/react';
import { 
  Key, 
  Camera, 
  Fence, 
  Lock, 
  Cpu, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'gate',
    title: 'Automated Gate Openers',
    description: 'High-performance sliding and swing gate motors for residential and industrial properties across Ghana.',
    icon: <Zap size={32} />,
    image: 'https://images.unsplash.com/photo-1598283023062-8e146eb4523e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    description: 'Advanced IP and analog camera systems with remote monitoring and night vision capabilities for total peace of mind.',
    icon: <Camera size={32} />,
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fence',
    title: 'Electric Fencing',
    description: 'Perimeter protection with high-voltage monitoring to deter intruders and alert you immediately.',
    icon: <Fence size={32} />,
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'emlock',
    title: 'EM Lock Systems',
    description: 'Electromagnetic locks for controlled access, ideal for offices and high-traffic commercial buildings.',
    icon: <Lock size={32} />,
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'security',
    title: 'Integrated Security',
    description: 'Complete home and office security solutions tailored to the unique landscape of Accra and beyond.',
    icon: <ShieldCheck size={32} />,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai',
    title: 'AI Smart Solutions',
    description: 'Intelligent automation that learns your patterns, optimizing energy usage and enhancing security responses.',
    icon: <Cpu size={32} />,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</span>
            <span className="h-[1px] w-8 bg-gold" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            PREMIUM <span className="text-gold">SERVICES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We provide end-to-end security and automation engineering. From design to installation and maintenance, our solutions set the standard in quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden glass rounded-2xl"
            >
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
              
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="mb-4 text-gold transform group-hover:-translate-y-2 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3 mb-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {service.description}
                </p>
                <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
