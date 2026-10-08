/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScheduleSection from './components/ScheduleSection';
import ServicesSection from './components/ServicesSection';
import PharmacySection from './components/PharmacySection';
import EmergencySection from './components/EmergencySection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (href === '#' || href === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAFAF8] text-[#1B7A77] flex flex-col font-body selection:bg-[#1B7A77]/20 selection:text-[#1B7A77]">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <ScheduleSection />
        <ServicesSection />
        <PharmacySection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
}
