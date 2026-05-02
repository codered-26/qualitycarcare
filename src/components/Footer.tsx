import React from 'react';
import { services } from '../data/services';
import { CONTACT_INFO, WHATSAPP_LINK } from '../data/contact';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Settings,
  MessageSquare
} from 'lucide-react';

// Custom Brand Icons (Lucide removed them in recent versions)
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-garage-black border-t border-garage-border pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Brand & Social - 4 cols */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-garage-red px-2 py-1 rounded-sm font-display text-2xl font-bold tracking-tighter italic text-white">
                QCC
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wide text-garage-white leading-none">QUALITY CAR CARE</span>
                <span className="font-mono text-[7px] text-garage-red uppercase tracking-[0.4em]">Engineered for Excellence</span>
              </div>
            </div>
            <p className="font-body text-garage-silver text-[12px] leading-relaxed max-w-xs">
              Chennai's premier destination for high-performance automotive maintenance and detailing since 2010.
            </p>
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, href: '#' },
                { icon: FacebookIcon, href: '#' },
                { icon: MessageSquare, href: WHATSAPP_LINK },
                { icon: Mail, href: `mailto:${CONTACT_INFO.email}` }
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-garage-silver hover:text-garage-red transition-colors">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info Grid - 8 cols */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <div className="sm:col-span-1 md:col-span-1">
              <h4 className="font-display text-sm tracking-widest uppercase mb-4 text-garage-white border-b border-garage-red/20 pb-1 w-fit">Expertise</h4>
              <ul className="grid grid-cols-1 gap-x-4 gap-y-2">
                {services.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="font-body text-garage-silver hover:text-garage-white transition-colors text-[10px] uppercase tracking-wider block truncate">
                      • {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase mb-4 text-garage-white border-b border-garage-red/20 pb-1 w-fit">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="font-body text-garage-silver hover:text-garage-white transition-colors text-[10px] uppercase tracking-wider block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-display text-sm tracking-widest uppercase mb-4 text-garage-white border-b border-garage-red/20 pb-1 w-fit">HQ Hub</h4>
              <div className="space-y-3">
                <p className="font-body text-garage-silver text-[10px] leading-relaxed flex items-start gap-2">
                  <MapPin size={12} className="text-garage-red shrink-0 mt-0.5" /> {CONTACT_INFO.address}
                </p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-display text-xl text-garage-white hover:text-garage-red transition-colors flex items-center gap-2">
                  <Phone size={16} className="text-garage-red" /> {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Certification & Pay Bar */}
        <div className="pt-6 border-t border-garage-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: ShieldCheck, text: 'Genuine Spares' },
              { icon: Award, text: 'Certified Lab' },
              { icon: Settings, text: 'Precision Tech' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={14} className="text-garage-red" />
                <span className="font-mono text-[9px] text-garage-silver uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {['VISA', 'UPI', 'CASH'].map((p) => (
                <div key={p} className="px-1.5 py-0.5 border border-garage-border rounded text-[7px] font-mono text-garage-silver opacity-60">
                  {p}
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-garage-silver uppercase tracking-widest">
              © {currentYear} QCC • <span className="text-garage-red">Chennai</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

