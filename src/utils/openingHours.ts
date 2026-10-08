export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  slots: { start: string; end: string }[];
  isClosed?: boolean;
}

export const CLINIC_SCHEDULE: ScheduleDay[] = [
  {
    dayName: 'Δευτέρα',
    dayIndex: 1,
    slots: [{ start: '09:00', end: '14:30' }],
  },
  {
    dayName: 'Τρίτη',
    dayIndex: 2,
    slots: [
      { start: '09:00', end: '14:30' },
      { start: '18:00', end: '21:00' },
    ],
  },
  {
    dayName: 'Τετάρτη',
    dayIndex: 3,
    slots: [{ start: '09:00', end: '14:30' }],
  },
  {
    dayName: 'Πέμπτη',
    dayIndex: 4,
    slots: [
      { start: '09:00', end: '14:30' },
      { start: '18:00', end: '21:00' },
    ],
  },
  {
    dayName: 'Παρασκευή',
    dayIndex: 5,
    slots: [
      { start: '09:00', end: '14:30' },
      { start: '18:00', end: '21:00' },
    ],
  },
  {
    dayName: 'Σάββατο',
    dayIndex: 6,
    slots: [{ start: '09:00', end: '14:30' }],
  },
  {
    dayName: 'Κυριακή',
    dayIndex: 0,
    slots: [],
    isClosed: true,
  },
];

export interface ClinicStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentDayIndex: number;
}

function timeStringToMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

export function getClinicStatus(): ClinicStatus {
  // Use Greece timezone (Europe/Athens)
  const now = new Date();
  const athensDateStr = now.toLocaleString('en-US', { timeZone: 'Europe/Athens' });
  const athensDate = new Date(athensDateStr);

  const dayIndex = athensDate.getDay();
  const currentMinutes = athensDate.getHours() * 60 + athensDate.getMinutes();

  const todaySchedule = CLINIC_SCHEDULE.find((d) => d.dayIndex === dayIndex);

  if (!todaySchedule || todaySchedule.isClosed || todaySchedule.slots.length === 0) {
    return {
      isOpen: false,
      statusText: 'Κλειστά αυτή τη στιγμή',
      subText: 'Επόμενο άνοιγμα: Δευτέρα 09:00',
      currentDayIndex: dayIndex,
    };
  }

  // Check if currently inside any slot
  for (const slot of todaySchedule.slots) {
    const startM = timeStringToMinutes(slot.start);
    const endM = timeStringToMinutes(slot.end);

    if (currentMinutes >= startM && currentMinutes < endM) {
      return {
        isOpen: true,
        statusText: 'Ανοιχτά τώρα',
        subText: `Έως τις ${slot.end}`,
        currentDayIndex: dayIndex,
      };
    }
  }

  // Check if opening later today
  for (const slot of todaySchedule.slots) {
    const startM = timeStringToMinutes(slot.start);
    if (currentMinutes < startM) {
      return {
        isOpen: false,
        statusText: 'Κλειστά αυτή τη στιγμή',
        subText: `Ανοίγει σήμερα στις ${slot.start}`,
        currentDayIndex: dayIndex,
      };
    }
  }

  // Closed for the rest of today, find next opening day
  return {
    isOpen: false,
    statusText: 'Κλειστά αυτή τη στιγμή',
    subText: 'Ανοίγει αύριο το πρωί στις 09:00',
    currentDayIndex: dayIndex,
  };
}
