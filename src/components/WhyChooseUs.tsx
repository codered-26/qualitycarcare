import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Bell, CheckCircle, Car, MapPin, Award, Sparkles } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-garage-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-garage-red rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-garage-red rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-garage-red/10 border border-garage-red/20 text-garage-red font-mono text-[8px] uppercase tracking-[0.3em] mb-3"
          >
            <Sparkles size={8} /> The QCC Advantage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl uppercase text-garage-white"
          >
            Engineered for <span className="text-garage-red">Excellence</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout - Extreme Compactness */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 auto-rows-fr">

          {/* 1. Main Hero Bento (Large) - Video Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-garage-card border border-garage-border p-5 md:p-6 flex flex-col justify-end min-h-[200px]"
          >
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-0"
            >
              <source src="/first-grid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 z-1" />

            <div className="relative z-20">
              <ShieldCheck size={32} className="text-garage-red mb-2 drop-shadow-lg" />
              <h3 className="font-display text-2xl text-white mb-1 uppercase drop-shadow-lg">Technician Mastery</h3>
              <p className="font-body text-white max-w-lg leading-tight text-[11px] md:text-[12px] drop-shadow-md">
                Certified specialists trained on high-performance vehicles. Precision in every repair.
              </p>
            </div>
          </motion.div>

          {/* 2. Experience Card (Promoted) - Image Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4  p-4 relative overflow-hidden flex flex-col justify-center items-center text-center group min-h-[96px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 z-0"
              style={{ backgroundImage: 'url("/experience-bg.png")' }}
            />
            <div className="absolute inset-0 bg-garage-black/60 z-1" />

            <div className="relative z-10">
              <div className="flex items-baseline gap-1 ">
                <span className="font-display text-3xl text-white">15+</span>
                <span className="font-display text-lg text-white uppercase">Years</span>
              </div>
              <p className="font-body text-white text-[7px] uppercase tracking-[0.2em] mt-1 drop-shadow-md">Automotive Legacy</p>
            </div>
          </motion.div>

          {/* 3. Real-time updates (Small) - Image Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-garage-card border border-garage-border p-4 relative overflow-hidden flex items-center gap-3 group min-h-[96px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 z-0"
              style={{ backgroundImage: 'url("/updates-bg.png")' }}
            />
            <div className="absolute inset-0 bg-black/40 z-1" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-garage-red flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform shadow-lg">
                <Bell size={16} />
              </div>
              <div>
                <h3 className="font-display text-base text-white uppercase mb-0.5 drop-shadow-lg">Live Updates</h3>
                <p className="font-body text-white text-[9px] leading-tight drop-shadow-md">WhatsApp connectivity.</p>
              </div>
            </div>
          </motion.div>

          {/* 4. Transparent Pricing (Medium) - Image Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-garage-card border border-garage-border p-4 relative overflow-hidden flex flex-col justify-between group min-h-[190px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 z-0"
              style={{ backgroundImage: 'url("/pricing-bg.png")' }}
            />
            <div className="absolute inset-0 bg-black/40 z-1" />

            <div className="relative z-10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-garage-red font-mono text-[8px] uppercase tracking-widest bg-black/40 w-fit px-1">
                  <CheckCircle size={9} /> Honest & Clear
                </div>
                <h3 className="font-display text-xl text-white uppercase drop-shadow-lg">Transparent <br />Pricing</h3>
              </div>
            </div>

            <div className="relative z-10 space-y-2">
              {[
                { label: 'Estimates', val: '100%' },
                { label: 'Spares', val: 'Assured' },
                { label: 'Hidden', val: 'None' }
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-garage-border/50 pb-1 bg-black/40 px-1">
                  <span className="font-body text-[10px] text-white drop-shadow-md">{item.label}</span>
                  <span className="font-mono text-[10px] text-garage-red drop-shadow-md">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Pickup & Drop (Medium) - Image Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-garage-card border border-garage-border p-4 relative overflow-hidden group min-h-[190px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 z-0"
              style={{ backgroundImage: 'url("/pickup-service.png")' }}
            />
            <div className="absolute inset-0 bg-black/40 z-1" />

            <div className="relative z-10">
              <Car size={24} className="text-garage-red mb-2 drop-shadow-lg" />
              <h3 className="font-display text-xl text-white mb-1 uppercase tracking-tight drop-shadow-lg">Pickup <br /> & Drop-off</h3>
              <p className="font-body text-white text-[11px] leading-tight relative drop-shadow-md">
                We collect and return your vehicle in pristine condition.
              </p>
              <div className="mt-2 flex items-center gap-2 text-garage-red font-mono text-[8px] uppercase tracking-widest bg-black/40 w-fit px-1">
                <MapPin size={9} /> Chennai Wide
              </div>
            </div>
          </motion.div>

          {/* 6. On-Time Guarantee (Medium) - Image Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-4 bg-garage-card border border-garage-border p-4 relative overflow-hidden flex flex-col justify-end group min-h-[190px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 z-0"
              style={{ backgroundImage: 'url("/guarantee-bg.png")' }}
            />
            <div className="absolute inset-0 bg-black/40 z-1" />

            <div className="relative z-10">
              <Award size={28} className="text-garage-red mb-auto group-hover:scale-110 transition-transform origin-left drop-shadow-lg" />
              <h3 className="font-display text-xl text-white mb-1 uppercase drop-shadow-lg">On-Time <br />Guarantee</h3>
              <p className="font-body text-white text-[11px] leading-relaxed drop-shadow-md">
                Delivered when promised, or we make it right.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
