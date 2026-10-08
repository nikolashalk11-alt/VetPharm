import { Phone } from 'lucide-react';
import pharmacyImage from '../assets/images/pet_pharmacy_wellness_1790368389130.jpg';

export default function PharmacySection() {
  return (
    <section id="pharmacy" className="scroll-mt-16 sm:scroll-mt-20 py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#1B7A77]/10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image presentation */}
          <div className="lg:col-span-5 order-2 lg:order-1 max-w-full">
            <div className="relative rounded-lg overflow-hidden border border-[#1B7A77]/20 shadow-lg bg-white aspect-[4/3] sm:aspect-square">
              <img
                src={pharmacyImage}
                alt="Κτηνιατρικό Φαρμακείο VetPharm"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block text-xs font-heading font-bold text-[#1B7A77] bg-white px-2.5 py-0.5 rounded-sm shadow-xs uppercase tracking-wider mb-2">
                  Επιστημονική Ασφάλεια
                </span>
                <h3 className="font-heading text-xl font-semibold text-[#FAFAF8] [text-shadow:_0_1px_3px_rgba(0,0,0,0.45)]">
                  Εγκεκριμένα Κτηνιατρικά Σκευάσματα
                </h3>
                <p className="font-body text-xs text-[#FAFAF8]/95 mt-1 [text-shadow:_0_1px_2px_rgba(0,0,0,0.45)]">
                  Σωστή δοσολογία προσαρμοσμένη στο ακριβές βάρος και τις ανάγκες του ζώου.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Veterinary Pharmacy Info */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 max-w-full">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B7A77]">
              Γιατί το εξειδικευμένο Κτηνιατρικό Φαρμακείο κάνει τη διαφορά
            </h2>

            <p className="font-body text-base text-[#1B7A77]/85 leading-relaxed">
              Τα ζώα έχουν εντελώς διαφορετικό μεταβολισμό από τον άνθρωπο. Κοινά ανθρώπινα παυσίπονα
              ή φάρμακα μπορούν να αποβούν θανατηφόρα για έναν σκύλο ή μία γάτα. Στο <strong>VetPharm</strong> διαθέτουμε
              αποκλειστικά πιστοποιημένα κτηνιατρικά φάρμακα και σας καθοδηγούμε υπεύθυνα για τη σωστή
              χορήγηση.
            </p>

            <div className="pt-2 max-w-full">
              <a
                href="tel:+302651083318"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#1B7A77] hover:bg-[#1B7A77]/90 text-white font-heading font-medium text-sm transition-all active:scale-95 shadow-xs max-w-full text-center"
              >
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>Τηλεφωνική Εξυπηρέτηση Φαρμακείου: 26510 83318</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
