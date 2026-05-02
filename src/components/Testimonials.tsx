import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, User, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Moulivakkam",
    service: "Ceramic Coating",
    text: "Absolutely phenomenal work on my Fortuner. The ceramic coating finish is like a mirror. Best in Chennai!",
    rating: 5,
    date: "OCT 2023",
    tag: "PREMIUM"
  },
  {
    name: "Priya S.",
    location: "Porur",
    service: "General Service",
    text: "Very professional team. They diagnosed an AC issue that other garages couldn't fix. Highly recommended.",
    rating: 5,
    date: "NOV 2023",
    tag: "REPAIR"
  },
  {
    name: "Karthik Raja",
    location: "Guindy",
    service: "Body Work & Painting",
    text: "Seamless dent removal and the paint matching was perfect. You can't even tell where the damage was.",
    rating: 4.8,
    date: "DEC 2023",
    tag: "RESTORE"
  },
  {
    name: "Anand Viswanathan",
    location: "Ramapuram",
    service: "Breakdown Assistance",
    text: "My car stalled late at night. QCC arrived in 20 mins and sorted it out. Life savers!",
    rating: 5,
    date: "JAN 2024",
    tag: "EMERGENCY"
  },
  {
    name: "Suresh Mani",
    location: "Valasaravakkam",
    service: "Interior Cleaning",
    text: "The interior deep cleaning removed stains that were years old. The car smells like new again.",
    rating: 5,
    date: "FEB 2024",
    tag: "DETAILING"
  },
  {
    name: "Deepika R.",
    location: "Moulivakkam",
    service: "Full Car Polish",
    text: "Excellent service and very transparent pricing. They kept me updated throughout the process.",
    rating: 5,
    date: "MAR 2024",
    tag: "SERVICE"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-garage-black relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 font-display text-[20vw] leading-none text-white/[0.02] pointer-events-none select-none uppercase">
        Reviews
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-garage-red/10 border border-garage-red/20 text-garage-red font-mono text-[10px] uppercase tracking-widest mb-4"
            >
              <Award size={12} /> Excellence Certified
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl uppercase leading-none"
            >
              Trusted by <span className="text-garage-red">Chennai's Drivers</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-end"
          >
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-garage-gold fill-garage-gold" />
              ))}
            </div>
            <p className="font-mono text-[10px] text-garage-silver uppercase tracking-widest">
              4.9/5 Based on 500+ Google Reviews
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Main Large Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-garage-card border border-garage-border p-8 relative group overflow-hidden"
          >
            <Quote className="absolute -top-6 -right-6 text-garage-red/5 w-48 h-48 -rotate-12 transition-transform group-hover:rotate-0 duration-700" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg bg-garage-red/10 border border-garage-red/20 flex items-center justify-center text-garage-red">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white uppercase">{testimonials[0].name}</h3>
                  <p className="font-mono text-[10px] text-garage-red uppercase tracking-widest">{testimonials[0].service}</p>
                </div>
              </div>

              <p className="font-body text-xl md:text-2xl text-garage-white italic leading-relaxed mb-8 max-w-2xl">
                "{testimonials[0].text}"
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-garage-border/50 pt-6">
                <div className="flex gap-6">
                  <div>
                    <p className="font-mono text-[9px] text-garage-silver uppercase tracking-tighter mb-1 text-left">Location</p>
                    <p className="font-display text-lg text-white uppercase">{testimonials[0].location}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-garage-silver uppercase tracking-tighter mb-1 text-left">Service Date</p>
                    <p className="font-display text-lg text-white uppercase">{testimonials[0].date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-garage-red text-white font-mono text-[10px] uppercase tracking-[0.2em] -rotate-2">
                  <CheckCircle2 size={12} /> Verified
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-garage-dark border border-garage-border p-6 flex flex-col justify-between group hover:border-garage-red/50 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-garage-gold fill-garage-gold" />
                  ))}
                </div>
                <span className="font-mono text-[9px] text-garage-red border border-garage-red/30 px-2 py-0.5 uppercase">{testimonials[1].tag}</span>
              </div>
              <p className="font-body text-lg md:text-2xl text-garage-white mb-6">
                "{testimonials[1].text}"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-garage-white/5 border border-garage-border flex items-center justify-center font-display text-white">
                {testimonials[1].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-display text-base text-white uppercase tracking-wide">{testimonials[1].name}</h4>
                <p className="font-mono text-[8px] text-garage-silver uppercase tracking-widest">{testimonials[1].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Small Feature Cards */}
          {testimonials.slice(2, 5).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="md:col-span-4 bg-garage-card border border-garage-border p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-garage-red/5 -mr-8 -mt-8 rotate-45" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-garage-red animate-pulse" />
                  <span className="font-mono text-[9px] text-garage-silver uppercase tracking-widest">{item.service}</span>
                </div>
                <p className="font-body text-sm text-garage-white mb-6 line-clamp-3">
                  "{item.text}"
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg text-white uppercase">{item.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={i < 5 ? "text-garage-gold fill-garage-gold" : "text-garage-border"} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card in Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-12 lg:col-span-12 bg-gradient-to-r from-garage-red to-garage-red-glow p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl text-white uppercase mb-2">Ready for a Mirror Finish?</h3>
              <p className="font-body text-white/80 text-sm md:text-base uppercase tracking-wider">Experience Chennai's Premier Automotive Care</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              className="relative z-10 px-8 py-4 bg-white text-garage-red font-display text-xl uppercase tracking-widest hover:bg-garage-black hover:text-white transition-all shadow-2xl"
            >
              Book Your Service
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

