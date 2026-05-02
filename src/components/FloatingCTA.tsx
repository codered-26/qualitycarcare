import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, Calendar } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINK } from '../data/contact';

const FloatingCTA: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-4">
      {/* Expanded Actions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-4 mb-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <span className="font-body text-sm font-bold">WhatsApp Us</span>
              <MessageCircle size={20} />
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 bg-garage-red text-white px-4 py-3 rounded-full shadow-lg hover:bg-garage-red-glow transition-colors"
            >
              <span className="font-body text-sm font-bold">Call Now</span>
              <Phone size={20} />
            </a>

            <button
              onClick={() => {
                setIsExpanded(false);
                window.dispatchEvent(new CustomEvent('open-booking'));
              }}
              className="flex items-center gap-3 bg-garage-white text-garage-black px-4 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              <span className="font-body text-sm font-bold text-inherit">Book Service</span>
              <Calendar size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl
           transition-colors ${isExpanded ?
            'bg-garage-card text-garage-red border border-garage-border' : 'bg-garage-red text-white border border-garage-black'
          }`}
      >
        {isExpanded ? <X size={32} /> : <MessageCircle size={32} />}
      </motion.button>
    </div>
  );
};

export default FloatingCTA;
