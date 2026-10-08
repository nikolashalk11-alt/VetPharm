import { Phone } from 'lucide-react';
import { CLINIC_SCHEDULE, getClinicStatus } from '../utils/openingHours';

export default function ScheduleSection() {
  const currentStatus = getClinicStatus();
  const currentDayIndex = currentStatus.currentDayIndex;

  return (
    <section id="schedule" className="scroll-mt-16 sm:scroll-mt-20 py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#1B7A77]/10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B7A77]">
            Ημέρες &amp; Ώρες Λειτουργίας
          </h2>
          <p className="font-body text-base text-[#1B7A77]/80">
            Είμαστε στη διάθεσή σας για κλινική εξέταση, συνταγογράφηση, εμβολιασμούς και
            κτηνιατρικά φαρμακευτικά σκευάσματα. Παρακαλούμε καλέστε για ραντεβού πριν την άφιξή σας.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {CLINIC_SCHEDULE.map((item) => {
            const isToday = item.dayIndex === currentDayIndex;

            return (
              <div
                key={item.dayName}
                className={`p-5 rounded-lg transition-colors duration-200 ${
                  isToday
                    ? 'bg-white border-2 border-[#1B7A77]'
                    : 'bg-white border-2 border-[#1B7A77]/15 hover:border-[#1B7A77]/30'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading font-semibold text-lg text-[#1B7A77]">
                      {item.dayName}
                    </span>
                    {isToday && (
                      <span className="text-[11px] font-heading font-semibold px-2 py-0.5 rounded-md bg-[#1B7A77] text-white shrink-0">
                        Σήμερα
                      </span>
                    )}
                  </div>

                  {item.isClosed ? (
                    <span className="text-sm font-heading font-semibold text-[#1B7A77]/60 shrink-0">
                      Κλειστό
                    </span>
                  ) : (
                    <div className="text-right shrink-0">
                      {item.slots.map((slot, idx) => (
                        <div
                          key={idx}
                          className="font-heading text-sm font-semibold text-[#1B7A77] tabular-nums"
                        >
                          {slot.start} – {slot.end}
                          {idx === 0 && item.slots.length > 1 && (
                            <span className="text-[#1B7A77] font-semibold mx-1.5">&amp;</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Appointment & Telephony Reminder Card */}
        <div className="max-w-4xl mx-auto mt-8 p-5 sm:p-6 rounded-lg bg-white border border-[#1B7A77]/20 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 max-w-full">
          <div>
            <h3 className="font-heading font-semibold text-lg text-[#1B7A77]">
              Προγραμματισμός Ραντεβού
            </h3>
            <p className="font-body text-sm text-[#1B7A77]/80 mt-1">
              Για να εξασφαλίσουμε τον απαραίτητο χρόνο και την ηρεμία για κάθε ζώο,
              όλες οι επισκέψεις πραγματοποιούνται <strong>κατόπιν τηλεφωνικού ραντεβού</strong>.
            </p>
          </div>

          <a
            href="tel:+302651083318"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md bg-[#1B7A77] hover:bg-[#1B7A77]/90 text-white font-heading font-medium text-sm transition-all whitespace-nowrap active:scale-95 shadow-xs shrink-0 self-start md:self-center"
          >
            <Phone className="w-4 h-4 text-white shrink-0" />
            <span>26510 83318</span>
          </a>
        </div>
      </div>
    </section>
  );
}
