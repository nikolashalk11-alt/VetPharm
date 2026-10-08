import felineImage from '../assets/images/feline_preventive_care_1790368399496.jpg';

const SERVICES = [
  {
    num: '01',
    title: 'Προληπτική Ιατρική & Εμβολιασμοί',
    desc: 'Ολοκληρωμένα εμβολιακά πρωτόκολλα για σκύλους και γάτες, ηλεκτρονική ταυτοποίηση (microchip) και έκδοση επίσημων βιβλιαρίων & διαβατηρίων υγείας.',
  },
  {
    num: '02',
    title: 'Κλινική Εξέταση & Παθολογία',
    desc: 'Αναλυτική κλινική διάγνωση, παρακολούθηση οξέων και χρόνιων παθήσεων, εργαστηριακές εξετάσεις και διαχείριση ηλικιωμένων ζώων συντροφιάς.',
  },
  {
    num: '03',
    title: 'Κτηνιατρικό Φαρμακείο & Θεραπεία',
    desc: 'Άμεση πρόσβαση σε εγκεκριμένα κτηνιατρικά σκευάσματα, αντιπαρασιτικές θεραπείες, αντιβιοτικά, ωτολογικές σταγόνες και δερματολογικά προϊόντα.',
  },
  {
    num: '04',
    title: 'Χειρουργική & Στειρώσεις',
    desc: 'Πραγματοποίηση επεμβάσεων μαλακών μορίων και προγραμματισμένων στειρώσεων με ασφαλή πρωτόκολλα αναισθησίας και προσεκτική μετεγχειρητική υποστήριξη.',
  },
  {
    num: '05',
    title: 'Οδοντιατρική Φροντίδα & Καθαρισμός',
    desc: 'Υπερηχητικός καθαρισμός οδοντικής πλάκας και τρυγίας, πρόληψη περιοδοντίτιδας και αντιμετώπιση στοματικής δυσοσμίας για υγιή δόντια και ούλα.',
  },
  {
    num: '06',
    title: 'Κλινικές Δίαιτες & Διατροφή',
    desc: 'Επιστημονική καθοδήγηση για τη διατροφή σε κάθε στάδιο ζωής (ανάπτυξη, ενήλικο, υπερήλικο) και εξειδικευμένες κλινικές δίαιτες για παθολογικές καταστάσεις.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 sm:scroll-mt-20 py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#1B7A77]/10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B7A77]">
            Ολοκληρωμένη Φροντίδα για το Κατοικίδιό σας
          </h2>
          <p className="font-body text-base text-[#1B7A77]/80 leading-relaxed">
            Από τον πρώτο προληπτικό εμβολιασμό έως τη σύνθετη φαρμακευτική αγωγή,
            παρέχουμε υπεύθυνες υπηρεσίες υγείας με γνώμονα την ασφάλεια και την άνεση του ζώου.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.num}
                className="bg-white p-6 sm:p-7 rounded-lg border border-[#1B7A77]/15 hover:border-[#1B7A77]/40 transition-all duration-200 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-heading text-xl font-semibold text-[#1B7A77] leading-snug">
                    {service.title}
                  </h3>
                  <span className="font-heading text-xs font-semibold text-[#1B7A77]/60 shrink-0 mt-1">
                    {service.num}
                  </span>
                </div>

                <p className="font-body text-sm text-[#1B7A77]/80 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner with Feline Image */}
        <div className="mt-12 rounded-lg bg-white border border-[#1B7A77]/15 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto h-full">
              <img
                src={felineImage}
                alt="Προληπτική κτηνιατρική φροντίδα και εξέταση γάτας"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1B7A77]">
                Εξέταση χωρίς περιττό στρες για τον σκύλο και τη γάτα σας
              </h3>
              <p className="font-body text-sm sm:text-base text-[#1B7A77]/80 leading-relaxed">
                Γνωρίζουμε ότι η επίσκεψη στον κτηνίατρο μπορεί να προκαλέσει άγχος στο κατοικίδιό σας.
                Γι’ αυτό οργανώνουμε τις επισκέψεις μας τηλεφωνικά, ώστε να υπάρχει επαρκής χρόνος,
                χωρίς συνωστισμό στην αναμονή και με απαλούς χειρισμούς που εμπνέουν ασφάλεια.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+302651083318"
                  className="inline-flex items-center gap-2.5 text-sm font-heading font-bold text-[#1B7A77] hover:underline underline-offset-4 transition-colors"
                >
                  <span>Καλέστε μας στο 26510 83318 για καθοδήγηση</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
