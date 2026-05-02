import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const ServiceBanner: React.FC = () => {
  // Use first 8 services to reduce vertical height
  const halfServices = services.slice(0, 8);

  return (
    <section className="relative py-20 bg-garage-black overflow-hidden border-y border-garage-border/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-garage-red/[0.02] -skew-x-12 transform translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-garage-red/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left Side: Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-garage-red mb-8"
              />
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-garage-white leading-[0.9] mb-8 uppercase tracking-normal">
                PRECISION <span className="text-garage-red">CARE</span> FOR YOUR MACHINE
              </h2>
              <p className="font-body text-garage-silver text-base md:text-lg max-w-xl leading-relaxed">
                Experience the gold standard of automotive maintenance. Our expert technicians combine years of experience with state-of-the-art tools to deliver unmatched quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {halfServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative bg-garage-dark/40 border border-white/[0.03] p-4 rounded-sm hover:border-garage-red/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Interactive Background Elements */}
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-garage-red group-hover:h-full transition-all duration-500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-garage-red/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icon & Index */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-garage-black border border-white/5 rounded-sm text-garage-silver group-hover:text-garage-red group-hover:border-garage-red/20 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(229,62,62,0.1)]">
                        <service.icon size={20} />
                      </div>
                      <span className="font-mono text-[9px] text-garage-red/40 group-hover:text-garage-red transition-colors tracking-tighter">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col pt-1">
                      <h3 className="font-display text-lg md:text-xl text-garage-white tracking-widest group-hover:text-garage-red transition-colors mb-1">
                        {service.title.toUpperCase()}
                      </h3>
                      <p className="font-body text-[11px] text-garage-silver leading-relaxed opacity-40 group-hover:opacity-80 transition-all duration-500 max-w-[200px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Corner Detail */}
                    <div className="absolute bottom-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 bg-garage-red rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-transparent border border-garage-red text-garage-red hover:text-white px-8 py-4 font-display tracking-[0.2em] text-sm transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  EXPLORE ALL SERVICES
                </span>
                <div className="absolute inset-0 bg-garage-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:col-span-2 lg:px-10"
          >
            {/* Image Container with premium frame */}
            <div className="relative z-10 rounded-lg overflow-hidden border border-garage-border/30 shadow-[0_0_60px_rgba(0,0,0,0.1)] group">
              <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[2/3]">
                <img
                  src="/bannet.png"
                  alt="Quality Car Care Showcase"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-garage-black/80 via-transparent to-transparent opacity-60" />

              {/* Red Corner Accents inside image */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-garage-red/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-garage-red/50" />
            </div>

            {/* External Decorative Frames */}
            <div className="absolute -top-8 -right-8 w-40 h-40 border-t-2 border-r-2 border-garage-red/20 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-b-2 border-l-2 border-garage-red/20 -z-10" />

            {/* Floating Statistics Badge */}


            {/* Glow Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-garage-red/5 blur-[100px] rounded-full -z-20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
