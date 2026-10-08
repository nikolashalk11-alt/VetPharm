import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#1B7A77]/15 transition-all">
      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand element */}
        <a href="#" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7A77] rounded-md">
          <Logo />
        </a>

        {/* Zone 2: Navigation Links (Text with subtle hover underline) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-heading font-medium text-[#1B7A77]">
          <a
            href="#services"
            className="hover:text-[#1B7A77] hover:opacity-80 transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1B7A77] hover:after:w-full after:transition-all"
          >
            Υπηρεσίες
          </a>
          <a
            href="#pharmacy"
            className="hover:text-[#1B7A77] hover:opacity-80 transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1B7A77] hover:after:w-full after:transition-all"
          >
            Κτηνιατρικό Φαρμακείο
          </a>
          <a
            href="#schedule"
            className="hover:text-[#1B7A77] hover:opacity-80 transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1B7A77] hover:after:w-full after:transition-all"
          >
            Ωράριο
          </a>
          <a
            href="#emergency"
            className="hover:text-[#1B7A77] transition-colors py-1 text-[#1B7A77] font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1B7A77] hover:after:w-full after:transition-all"
          >
            Επείγοντα
          </a>
        </nav>

        {/* Zone 3: Primary Action (Phone Call CTA) */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+302651083318"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2 rounded-md bg-[#1B7A77] hover:bg-[#1B7A77]/90 text-[#FAFAF8] font-heading font-medium text-sm transition-colors shadow-xs group whitespace-nowrap active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-200" />
            <span>26510 83318</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1B7A77] hover:bg-[#1B7A77]/10 transition-colors focus:outline-none"
            aria-label="Μενού πλοήγησης"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF8] border-b border-[#1B7A77]/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-heading font-medium text-[#1B7A77]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#1B7A77]/10 transition-colors"
            >
              Υπηρεσίες
            </a>
            <a
              href="#pharmacy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#1B7A77]/10 transition-colors"
            >
              Κτηνιατρικό Φαρμακείο
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#1B7A77]/10 transition-colors"
            >
              Ωράριο Λειτουργίας
            </a>
            <a
              href="#emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-[#1B7A77] font-semibold hover:bg-[#1B7A77]/10 transition-colors"
            >
              Επείγοντα Περιστατικά
            </a>
          </nav>

          <div className="pt-3 border-t border-[#1B7A77]/15">
            <a
              href="tel:+302651083318"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-md bg-[#1B7A77] text-[#FAFAF8] font-heading font-medium text-center transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Κλήση: +30 26510 83318</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
