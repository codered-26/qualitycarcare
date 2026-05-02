import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = '', prefix = '', isInView }) => {
  const count = useCountUp(value, 2000, isInView);

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 border-r border-white/10 last:border-r-0 md:border-r">
      <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-1">
        {prefix}{count}{suffix}
      </div>
      <div className="font-display text-white/70 tracking-widest text-[10px] md:text-xs uppercase">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="bg-garage-red relative overflow-hidden -mt-10">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-18xl mx-auto grid grid-cols-2 md:grid-cols-4 relative z-10">
        <StatItem label="Customer Rating" value={4} suffix=".8 " isInView={isInView} />
        <StatItem label="Happy Reviews" value={30} suffix="+" isInView={isInView} />
        <StatItem label="Always Open" value={24} suffix="/7" isInView={isInView} />
        <StatItem label="Years Exp." value={5} suffix="+" isInView={isInView} />
      </div>
    </section>
  );
};

export default Stats;
