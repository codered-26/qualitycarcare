import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial check: if html has 'dark' class, it's dark
    setIsDark(document.documentElement.classList.contains('dark'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-garage-black/80 backdrop-blur-md border-b border-garage-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-garage-red flex items-center justify-center rounded-sm transform group-hover:rotate-[360deg] transition-transform duration-700">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-tighter text-garage-white">QUALITY</span>
            <span className="font-mono text-[10px] tracking-widest text-garage-red font-bold">CAR CARE</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-garage-silver hover:text-garage-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-4 w-px bg-white/10" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-garage-border hover:bg-garage-red/10 transition-colors text-garage-red"
            title="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 text-garage-white hover:text-garage-red transition-colors"
          >
            <Phone size={18} className="text-garage-red" />
            <span className="hidden xl:inline font-mono text-sm">{CONTACT_INFO.phone}</span>
          </a>

          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            className="relative overflow-hidden bg-garage-red text-white px-8 py-3 font-display tracking-widest text-sm transition-all hover:bg-garage-red-glow"
          >
            <span className="relative z-10">BOOK NOW</span>
          </button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-garage-red"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-garage-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-garage-card border-b border-garage-border overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-3xl uppercase text-garage-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-white/5" />
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 text-garage-white text-xl font-mono"
              >
                <Phone size={24} className="text-garage-red" />
                {CONTACT_INFO.phone}
              </a>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-booking'));
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-garage-red text-white py-4 font-display tracking-widest text-lg"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
