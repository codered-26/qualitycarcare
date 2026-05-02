import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, type Service } from '../data/services';
import ServiceScroller from './ServiceScroller';
import ServiceDetailModal from './ServiceDetailModal';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const categories = ['All', 'Repair', 'Detailing', 'Electrical', 'More'] as const;
type Category = typeof categories[number];

const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = useMemo(() =>
    services.filter(service =>
      activeCategory === 'All' || service.category === activeCategory
    ), [activeCategory]
  );

  // Group services into chunks of 6 for the paged slider
  const serviceChunks = useMemo(() => {
    const chunks: Service[][] = [];
    for (let i = 0; i < filteredServices.length; i += 6) {
      chunks.push(filteredServices.slice(i, i + 6));
    }
    return chunks;
  }, [filteredServices]);

  return (
    <section id="services" className="py-16 bg-garage-dark overflow-hidden">
      {/* Filter Scroller */}
      <ServiceScroller
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <div className="w-16 h-1 bg-garage-red" />
            <h2 className="font-display text-4xl md:text-5xl tracking-normal text-garage-white font-bold uppercase">
              Car Services <span className="text-garage-silver/50">In</span> Chennai
            </h2>
            <p className="font-body text-garage-silver text-sm md:text-base max-w-xl leading-relaxed">
              Experience precision automotive care. Select a category to explore our specialized services tailored for Chennai's driving conditions.
            </p>
          </motion.div>

          {serviceChunks.length > 1 && (
            <div className="flex items-center gap-3 text-garage-silver font-mono text-[10px] uppercase tracking-widest bg-white/5 p-1.5 px-3 rounded-full border border-white/5">
              <ChevronLeft size={12} className="animate-pulse" />
              <span>Slide for more pages</span>
              <ChevronRight size={12} className="animate-pulse" />
            </div>
          )}
        </div>

        {/* Paged Slider Container */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8">
            {serviceChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="min-w-full snap-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {chunk.map((service) => (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group relative bg-garage-card border border-garage-border transition-all duration-500 hover:border-garage-red/50 hover:shadow-[0_0_30px_rgba(229,62,62,0.15)] flex flex-col min-h-[240px] overflow-hidden"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-100 group-hover:opacity-100"
                        />
                        {/* Mid-level Overlay - Balanced for both themes */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5" />
                      </div>

                      <div className="relative z-10 flex flex-col h-full p-5">
                        <div className="flex justify-between items-start mb-auto">
                          <div className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 rounded-lg group-hover:border-garage-red/50 group-hover:text-garage-red transition-all duration-500 text-white/80">
                            <service.icon size={20} />
                          </div>
                          <span className="text-[8px] font-mono text-white/40 group-hover:text-garage-red transition-colors uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded bg-black/20 backdrop-blur-sm">
                            {service.category}
                          </span>
                        </div>

                        <div className="mt-4">
                          <h3 className="font-display text-xl tracking-wide mb-1 group-hover:text-garage-red transition-colors text-white uppercase">
                            {service.title}
                          </h3>

                          <p className="font-body text-[12px] text-white/70 leading-relaxed line-clamp-2 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                            {service.description}
                          </p>

                          <button
                            onClick={() => setSelectedService(service)}
                            className="w-full group/btn relative overflow-hidden border border-white/10 py-2.5 transition-all duration-500 hover:border-garage-red"
                          >
                            <div className="absolute inset-0 bg-garage-red translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                            <span className="relative z-10 font-display text-[10px] tracking-[0.2em] text-white/60 group-hover/btn:text-white flex items-center justify-center gap-2">
                              READ MORE
                              <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Animated Glow Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-garage-red transition-all duration-700 group-hover:w-full" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          {serviceChunks.length > 1 && (
            <div className="flex justify-center gap-2">
              {serviceChunks.map((_, i) => (
                <div key={i} className="w-6 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className={`h-full bg-garage-red/50 transition-all duration-500 ${filteredServices.length > (i * 6) ? 'w-full' : 'w-0'}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ServicesGrid;
