import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-garage-black/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-garage-card border border-garage-border rounded-xl overflow-hidden shadow-2xl shadow-garage-red/10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-garage-red transition-colors"
          >
            <X size={20} />
          </button>

          {/* Service Image (Thumbnail) */}
          <div className="relative aspect-[18/9] bg-garage-dark overflow-hidden group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-garage-black/20 group-hover:bg-transparent transition-colors duration-500" />

            {/* Service Icon Overlay */}
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-garage-card to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-garage-red flex items-center justify-center rounded-lg shadow-lg">
                  <service.icon size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-garage-red font-mono text-[9px] uppercase tracking-widest bg-garage-red/10 px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display text-white uppercase tracking-tight">
                    {service.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-5">
            <div className="space-y-3">
              <h3 className="font-display text-lg text-garage-red tracking-wide flex items-center gap-2">
                SERVICE OVERVIEW
              </h3>
              <p className="font-body text-garage-silver leading-relaxed text-base">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 border border-white/5 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="text-garage-red" size={18} />
                <span className="text-xs text-garage-white">Genuine Materials</span>
              </div>
              <div className="bg-white/5 p-3 border border-white/5 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="text-garage-red" size={18} />
                <span className="text-xs text-garage-white">Expert Technicians</span>
              </div>
              <div className="bg-white/5 p-3 border border-white/5 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="text-garage-red" size={18} />
                <span className="text-xs text-garage-white">Quality Assurance</span>
              </div>
              <div className="bg-white/5 p-3 border border-white/5 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="text-garage-red" size={18} />
                <span className="text-xs text-garage-white">Transparent Pricing</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-booking', {
                    detail: { service: service.title }
                  }));
                  onClose();
                }}
                className="flex-1 bg-garage-red hover:bg-garage-red-glow text-white font-display tracking-widest py-3 transition-all rounded flex items-center justify-center gap-2 text-sm"
              >
                BOOK THIS SERVICE
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-garage-border hover:border-white/20 text-garage-silver font-display tracking-widest transition-all rounded text-sm"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
