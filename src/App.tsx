import { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ServiceBanner from './components/ServiceBanner';

// Lazy load heavy modal
const BookingModal = lazy(() => import('./components/BookingModal'));

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-garage-black text-garage-white selection:bg-garage-red selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <ServiceBanner />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
      
      <FloatingCTA />

      {/* Booking Modal (Suspense for lazy loading) */}
      <Suspense fallback={null}>
        <BookingModal />
      </Suspense>
    </div>
  );
}

export default App;
