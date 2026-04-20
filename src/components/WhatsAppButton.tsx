import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+233240000000'; // Placeholder
  const message = 'Hello DGL Automation, I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center border-4 border-black group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
        Chat with Us
      </span>
    </motion.a>
  );
}
