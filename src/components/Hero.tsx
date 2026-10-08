import { Phone } from 'lucide-react';
import heroImage from '../assets/images/hero_veterinary_care_1790368377480.jpg';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#1B7A77]/10 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Telephony CTA */}
          <div className="lg:col-span-7 space-y-6 max-w-full">
            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1B7A77] leading-[1.3] text-balance">
              Υπεύθυνη Κτηνιατρική Φροντίδα &amp; Πλήρες Φαρμακείο στα Ιωάννινα
            </h1>

            {/* Editorial Body */}
            <p className="font-body text-base sm:text-lg text-[#1B7A77]/85 leading-relaxed max-w-2xl font-normal">
              Στο <strong>VetPharm</strong>, στη Λεωφόρο Ιωαννίνων 82, συνδυάζουμε τη σύγχρονη
              κλινική πράξη με ένα πλήρως εξοπλισμένο κτηνιατρικό φαρμακείο. Φροντίζουμε
              την υγεία, την πρόληψη και την ευζωία των μικρών μας φίλων με συνέπεια, επιστημονική
              κατάρτιση και ειλικρινή αγάπη.
            </p>

            {/* Direct Telephone Action Area */}
            <div className="pt-2">
              <a
                href="tel:+302651083318"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md bg-[#1B7A77] hover:bg-[#1B7A77]/90 text-[#FAFAF8] text-base sm:text-lg font-heading font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group text-center"
              >
                <Phone className="w-5 h-5 text-white shrink-0 group-hover:rotate-12 transition-transform duration-200" />
                <span>Κλήση για Ραντεβού: 26510 83318</span>
              </a>
            </div>
          </div>

          {/* Right Column: High Quality Photographic Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#1B7A77]/15 shadow-xl bg-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={heroImage}
                alt="Κτηνιατρική φροντίδα και κλινική εξέταση κατοικιδίου στο VetPharm"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
