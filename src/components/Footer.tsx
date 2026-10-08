import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1B7A77] text-[#FAFAF8] pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-[#1B7A77] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo isFooter />
            <p className="font-body text-sm text-[#FAFAF8]/85 max-w-sm leading-relaxed">
              Κτηνιατρείο και εξειδικευμένο Κτηνιατρικό Φαρμακείο στα Ιωάννινα.
              Πλήρης κλινική παρακολούθηση, προληπτική ιατρική, χειρουργική και θεραπευτικά σκευάσματα.
            </p>
            <div className="pt-2 text-xs font-body text-[#FAFAF8]/70 flex items-center gap-1.5">
              <span>Φροντίζουμε τα ζώα σας με σεβασμό &amp; επιστημονική συνέπεια</span>
              <Heart className="w-3.5 h-3.5 text-[#8CE0DC] fill-[#8CE0DC]" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-heading text-base font-semibold text-white tracking-wider uppercase">
              Επικοινωνία &amp; Τοποθεσία
            </h3>
            <div className="space-y-2.5 text-sm font-body text-[#FAFAF8]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8CE0DC] shrink-0 mt-0.5" />
                <span>Λεωφόρος Ιωαννίνων 82, Ανατολή, Ιωάννινα 45222</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8CE0DC] shrink-0" />
                <a
                  href="tel:+302651083318"
                  className="font-heading font-medium underline decoration-[#8CE0DC] hover:text-[#8CE0DC] transition-colors"
                >
                  +30 26510 83318
                </a>
              </div>
              <p className="text-xs text-[#FAFAF8]/70 pt-1">
                * Όλα τα ραντεβού και τα επείγοντα περιστατικά εξυπηρετούνται αποκλειστικά τηλεφωνικά.
              </p>
            </div>
          </div>

          {/* Quick Schedule summary */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-base font-semibold text-white tracking-wider uppercase">
              Συνοπτικό Ωράριο
            </h3>
            <div className="space-y-1.5 text-xs font-heading font-medium text-[#FAFAF8]/90">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8CE0DC]" />
                <span className="font-semibold">Δευ, Τετ, Σαβ:</span>
                <span>09:00 – 14:30</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8CE0DC]" />
                <span className="font-semibold">Τρι, Πεμ, Παρ:</span>
                <span>09:00 – 14:30 &amp; 18:00 – 21:00</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-3.5 h-3.5 text-white/60" />
                <span className="font-semibold">Κυριακή:</span>
                <span>Κλειστό</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 sm:pt-10 flex items-center justify-center text-center text-xs font-body text-[#FAFAF8]/60">
          <p>© {new Date().getFullYear()} VetPharm. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </div>
    </footer>
  );
}
