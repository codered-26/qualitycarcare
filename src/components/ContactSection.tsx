import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CreditCard, Globe, MessageSquare, Share2 } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINK } from '../data/contact';

const Contact: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quality Car Care | Chennai',
        text: 'Best car repair and detailing in Moulivakkam, Chennai.',
        url: window.location.href,
      }).catch(() => {});
    }
  };

  return (
    <section id="contact" className="py-24 bg-garage-black border-t border-garage-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-8 text-garage-white">
              Visit <span className="text-garage-red">Our Garage</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-garage-red/10 border border-garage-red/30 flex items-center justify-center shrink-0">
                  <MapPin className="text-garage-red" size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl tracking-wide uppercase mb-2 text-garage-white">Location</h4>
                  <p className="font-body text-garage-silver leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-garage-red/10 border border-garage-red/30 flex items-center justify-center shrink-0">
                  <Clock className="text-garage-red" size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl tracking-wide uppercase mb-2 text-garage-white">Working Hours</h4>
                  <p className="font-body text-garage-silver leading-relaxed">
                    {CONTACT_INFO.workingHours}<br />
                    Breakdown Support: Always Available
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-garage-red/10 border border-garage-red/30 flex items-center justify-center shrink-0">
                  <CreditCard className="text-garage-red" size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl tracking-wide uppercase mb-2 text-garage-white">Payment Methods</h4>
                  <p className="font-body text-garage-silver leading-relaxed">
                    Cash, UPI, Credit/Debit Cards, Net Banking
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href={CONTACT_INFO.mapsLink} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 border border-garage-border flex items-center justify-center hover:bg-garage-red hover:border-garage-red text-garage-silver hover:text-white transition-all shadow-lg"
                title="Google Maps"
              >
                <Globe size={24} />
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 border border-garage-border flex items-center justify-center hover:bg-garage-red hover:border-garage-red text-garage-silver hover:text-white transition-all shadow-lg"
                title="WhatsApp Us"
              >
                <MessageSquare size={24} />
              </a>
              <button 
                onClick={handleShare}
                className="w-12 h-12 border border-garage-border flex items-center justify-center hover:bg-garage-red hover:border-garage-red text-garage-silver hover:text-white transition-all shadow-lg"
                title="Share Website"
              >
                <Share2 size={24} />
              </button>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] border border-garage-border p-2 bg-garage-card"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4103138378!2d80.1471339!3d13.0094951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f855555555%3A0x6b8a8b8b8b8b8b8b!2sQuality%20Car%20Care%2C%20Moulivakkam!5e0!3m2!1sen!2sin!4v1714480000000!5m2!1sen!2sin" 
              className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
