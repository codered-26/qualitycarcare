import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronDown, MessageCircle, Mail, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import { WHATSAPP_LINK } from '../data/contact';

const BookingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'form' | 'method' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.service) {
        setFormData(prev => ({ ...prev, service: customEvent.detail.service }));
      }
      setIsOpen(true);
      setStep('form');
      setErrors({});
    };
    window.addEventListener('open-booking', handleOpen as EventListener);
    return () => window.removeEventListener('open-booking', handleOpen as EventListener);
  }, []);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.service) newErrors.service = "Please select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep('method');
  };

  const handleConfirmWhatsApp = () => {
    const message = `*NEW BOOKING REQUEST*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Vehicle:* ${formData.vehicle || 'Not Specified'}%0A*Service:* ${formData.service}%0A*Date/Time:* ${formData.date || 'Not Specified'}%0A*Message:* ${formData.message || 'No additional message'}`;

    const waUrl = `${WHATSAPP_LINK}?text=${message}`;
    window.open(waUrl, '_blank');
    setStep('success');
    finalizeBooking();
  };

  const handleConfirmEmail = () => {
    setStep('success');
    finalizeBooking();
  };

  const finalizeBooking = () => {
    setTimeout(() => {
      setIsOpen(false);
      setStep('form');
      setFormData({ name: '', phone: '', vehicle: '', service: '', date: '', message: '' });
    }, 4000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep('form');
    setErrors({});
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-garage-black/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-garage-card border border-garage-border p-6 md:p-8 shadow-2xl overflow-hidden"
          >
            {/* Steps Content */}
            <AnimatePresence mode="wait">
              {step === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 z-50 bg-garage-card flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                  >
                    <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="font-display text-3xl mb-2 uppercase text-garage-white">Booking Confirmed!</h3>
                  <p className="font-body text-garage-silver text-sm">
                    Thank you, {formData.name}. We've received your request and will contact you shortly.
                  </p>
                </motion.div>
              ) : step === 'method' ? (
                <motion.div
                  key="method"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <button
                    onClick={() => setStep('form')}
                    className="flex items-center gap-2 text-garage-silver hover:text-garage-red transition-colors mb-6 font-mono text-[9px] uppercase tracking-widest"
                  >
                    <ArrowLeft size={12} /> Back to details
                  </button>

                  <h2 className="font-display text-3xl md:text-4xl mb-1 uppercase tracking-tight text-garage-white">
                    Choose <span className="text-garage-red">Confirmation</span>
                  </h2>
                  <p className="font-body text-garage-silver text-sm mb-8">Select your preferred way to confirm this booking.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={handleConfirmWhatsApp}
                      className="group flex flex-col items-center gap-3 p-6 bg-garage-dark border border-garage-border hover:border-green-500/50 transition-all duration-500"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                        <MessageCircle size={28} />
                      </div>
                      <div className="text-center">
                        <span className="block font-display text-lg text-garage-white mb-0.5">WhatsApp</span>
                        <span className="block font-body text-[10px] text-garage-silver opacity-60">Send booking details instantly</span>
                      </div>
                    </button>

                    <button
                      onClick={handleConfirmEmail}
                      className="group flex flex-col items-center gap-3 p-6 bg-garage-dark border border-garage-border hover:border-garage-red/50 transition-all duration-500"
                    >
                      <div className="w-14 h-14 rounded-full bg-garage-red/10 flex items-center justify-center text-garage-red group-hover:bg-garage-red group-hover:text-white transition-all duration-500">
                        <Mail size={28} />
                      </div>
                      <div className="text-center">
                        <span className="block font-display text-lg text-garage-white mb-0.5">Email</span>
                        <span className="block font-body text-[10px] text-garage-silver opacity-60">Get confirmation via email</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-0 right-0 text-garage-silver hover:text-garage-red transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <h2 className="font-display text-3xl md:text-4xl mb-1 uppercase tracking-tight text-garage-white">
                    Book Your <span className="text-garage-red">Service</span>
                  </h2>
                  <p className="font-body text-garage-silver text-sm mb-6">Experience Chennai's finest automotive care.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-garage-red font-bold">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Rajesh Kumar"
                        className={`bg-garage-dark border ${errors.name ? 'border-garage-red' : 'border-garage-border'} p-2.5 font-body text-sm text-garage-white focus:border-garage-red outline-none transition-colors placeholder:text-garage-silver/50`}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="text-garage-red text-[9px] font-mono uppercase tracking-tight">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-garage-red font-bold">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={`bg-garage-dark border ${errors.phone ? 'border-garage-red' : 'border-garage-border'} p-2.5 font-body text-sm text-garage-white focus:border-garage-red outline-none transition-colors placeholder:text-garage-silver/50`}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="text-garage-red text-[9px] font-mono uppercase tracking-tight">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-garage-red font-bold">Vehicle Model</label>
                      <input
                        type="text"
                        placeholder="Toyota Fortuner"
                        className="bg-garage-dark border border-garage-border p-2.5 font-body text-sm text-garage-white focus:border-garage-red outline-none transition-colors placeholder:text-garage-silver/50"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 relative">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-garage-red font-bold">Service Needed *</label>
                      <div className="relative">
                        <select
                          className={`w-full appearance-none bg-garage-dark border ${errors.service ? 'border-garage-red' : 'border-garage-border'} p-2.5 font-body text-sm text-garage-white focus:border-garage-red outline-none transition-colors cursor-pointer`}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Select a service</option>
                          {services.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none text-garage-silver" />
                      </div>
                      {errors.service && <span className="text-garage-red text-[9px] font-mono uppercase tracking-tight">{errors.service}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-garage-red font-bold">Preferred Date/Time</label>
                      <input
                        type="datetime-local"
                        className="bg-garage-dark border border-garage-border p-2.5 font-body text-sm text-garage-white focus:border-garage-red outline-none transition-colors"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-garage-red font-bold">Special Message</label>
                      <textarea
                        placeholder="Tell us more about your car..."
                        rows={2}
                        className="bg-garage-dark border border-garage-border p-2.5 font-body text-sm text-garage-white focus:border-garage-red outline-none transition-colors placeholder:text-garage-silver/50"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="md:col-span-2 bg-garage-red hover:bg-garage-red-glow text-white py-3 font-display tracking-widest text-lg transition-all transform active:scale-95 mt-2"
                    >
                      CONFIRM BOOKING
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
