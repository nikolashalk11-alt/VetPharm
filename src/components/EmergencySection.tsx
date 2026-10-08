import { Phone, HeartPulse } from 'lucide-react';

export default function EmergencySection() {
  return (
    <section id="emergency" className="scroll-mt-16 sm:scroll-mt-20 py-16 lg:py-20 bg-[#FAFAF8] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white border border-[#1B7A77]/25 p-6 sm:p-10 shadow-sm relative overflow-hidden max-w-full">
          {/* Subtle background accent glow */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#1B7A77]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 max-w-full">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B7A77]">
                Τι να κάνετε σε περίπτωση έκτακτης ανάγκης
              </h2>

              <p className="font-body text-base text-[#1B7A77]/85 leading-relaxed">
                Σε ένα επείγον ιατρικό περιστατικό, τα πρώτα λεπτά είναι κρίσιμα.{' '}
                <strong>Καλέστε μας άμεσα στο τηλέφωνο</strong> πριν ξεκινήσετε, ώστε να λάβετε
                τις πρώτες σωτήριες οδηγίες και να προετοιμαστεί ο κατάλληλος εξοπλισμός στο κτηνιατρείο.
              </p>
            </div>

            {/* Right Call-out box */}
            <div className="lg:col-span-5 bg-[#1B7A77] text-[#FAFAF8] p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-6 text-center shadow-md max-w-full">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-md bg-white/10 mx-auto flex items-center justify-center text-white">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  Άμεση Τηλεφωνική Κλήση
                </h3>
                <p className="font-body text-xs text-[#FAFAF8]/80 max-w-xs mx-auto">
                  Μην περιμένετε αν παρατηρήσετε ανησυχητικά συμπτώματα. Καλέστε άμεσα:
                </p>
              </div>

              <div>
                <a
                  href="tel:+302651083318"
                  className="w-full inline-flex items-center justify-center gap-3 py-3 sm:py-3.5 px-5 sm:px-6 rounded-md bg-white hover:bg-[#FAFAF8] text-[#1B7A77] font-heading font-medium text-base sm:text-lg transition-transform active:scale-95 shadow-xs"
                >
                  <Phone className="w-5 h-5 text-[#1B7A77] shrink-0" />
                  <span>+30 26510 83318</span>
                </a>
                <p className="font-body text-[11px] text-[#FAFAF8]/70 mt-3">
                  Λεωφόρος Ιωαννίνων 82, Ανατολή, Ιωάννινα
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
