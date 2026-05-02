import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const words = "YOUR CAR DESERVES THE BEST".split(" ");

  const trustBadges = [
    { icon: Star, text: "4.8 Rating", color: "text-garage-gold" },
    { icon: Users, text: "30+ Reviews", color: "text-garage-silver" },
    { icon: Clock, text: "Open 24/7", color: "text-garage-red" },
    { icon: Shield, text: "Est. 2020", color: "text-garage-silver" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-garage-black">
      {/* Background with dynamic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-garage-red/5 via-transparent to-garage-red/5" />
        <div className="absolute inset-0 bg-black/40 hidden dark:block z-10" />
      </div>

      {/* Decorative Red Diagonal */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-garage-red/20 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

      {/* Red Glowing Orb */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-garage-red/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 opacity-30 dark:opacity-60" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 z-20 items-center">
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center text-center lg:text-left"
        >


          <h1 className="font-display text-5xl md:text-7xl xl:text-8xl leading-none mb-4 text-garage-white uppercase tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-3 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-garage-silver text-base md:text-lg max-w-xl mb-8 mx-auto lg:mx-0"
          >
            Expert repairs, ceramic coatings, and 24/7 service — right here in Moulivakkam, Chennai. Experience automotive precision.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
          >
            <button
              className="bg-garage-red hover:bg-garage-red-glow text-white px-6 py-3 font-display tracking-widest text-sm transition-all transform hover:scale-105"
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            >
              BOOK A SERVICE
            </button>
            <a
              href="#services"
              className="border border-garage-border hover:border-garage-red/50 hover:bg-garage-red/5 text-garage-white px-6 py-3 font-display tracking-widest text-sm transition-all"
            >
              EXPLORE SERVICES
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start gap-1">
                <badge.icon size={18} className={badge.color} />
                <span className="text-[10px] font-mono font-bold text-garage-white uppercase tracking-tighter">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-garage-border/30 shadow-2xl group">
            <img
              src="/hero_car.jpeg"
              alt="Premium Car Care"
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-garage-black/40 via-transparent to-garage-white/10 opacity-60 pointer-events-none" />

            {/* Red accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-garage-red to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </div>

          {/* Decorative Frames */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-garage-red/30 rounded-tr-3xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-garage-red/30 rounded-bl-3xl -z-10" />

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-garage-red/10 blur-[100px] rounded-full -z-20 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
