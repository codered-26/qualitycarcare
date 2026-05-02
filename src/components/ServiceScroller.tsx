import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceScrollerProps {
  categories: readonly string[];
  activeCategory: string;
  setActiveCategory: (category: any) => void;
}

const ServiceScroller: React.FC<ServiceScrollerProps> = ({ categories, activeCategory, setActiveCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Use a small buffer (5px) for precision
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    // Add a small delay to ensure ref is populated and layout is stable
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, [categories]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 -mt-10 mb-12 relative z-30 -ml-1">
      <div className="bg-garage-card border border-garage-border rounded-lg overflow-hidden relative group">
        <div className="flex items-center relative">
          {/* Simple Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-0 bottom-0 z-10 px-2 bg-garage-card/90 text-garage-white hover:text-garage-red transition-colors flex items-center justify-center border-r border-garage-border"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto items-center gap-8 md:gap-12 py-5 px-10 whitespace-nowrap no-scrollbar scroll-smooth w-full justify-between"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative font-display text-xs md:text-sm tracking-widest uppercase transition-all flex-shrink-0 ${activeCategory === category
                  ? 'text-garage-white font-bold'
                  : 'text-garage-silver hover:text-garage-white'
                  }`}
              >
                {category === 'All' ? 'Our Services' : category === 'More' ? 'How It Works?' : category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-5 left-0 right-0 h-1 bg-garage-red"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Simple Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-0 bottom-0 z-10 px-2 bg-garage-card/90 text-garage-white hover:text-garage-red transition-colors flex items-center justify-center border-l border-garage-border"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceScroller;
