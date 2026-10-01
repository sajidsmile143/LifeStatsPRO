export interface BirthInput {
  birthDate: string; // YYYY-MM-DD
  birthTime: string; // HH:mm
  name?: string;
  profileImage?: string; // Base64 or Object URL string
}

export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
  weeks: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  millisecondsLived: number;
}

export interface LifeStats {
  hoursSlept: number;
  yearsSlept: number;
  heartbeats: number;
  breaths: number;
  stepsWalked: number;
  foodEatenKg: number;
  blinks: number;
  dreamsCount: number;
  laughterMinutes: number;
  waterDrankLiters: number;
}

export interface ZodiacDetails {
  westernSign: string;
  westernSymbol: string;
  element: string;
  rulingPlanet: string;
  birthstone: string;
  chineseZodiac: string;
  chineseAnimal: string;
  chineseElement: string;
  trait: string;
}

export interface PlanetaryAge {
  planet: string;
  name: string;
  icon: string;
  ageInYears: number;
  orbitalPeriodDays: number;
  nextPlanetBirthdayDays: number;
  description: string;
}

export interface NextBirthdayCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  progressPercent: number;
  nextAge: number;
  nextBirthdayDate: string;
  dayOfWeek: string;
}

export interface WeekendBirthdayInfo {
  year: number;
  age: number;
  dateStr: string;
  dayOfWeek: string;
  isWeekend: boolean;
}

export interface MilestoneItem {
  id: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  progressPercent: number;
  reached: boolean;
  estimatedDate?: string;
}

export interface CompleteAgeResults {
  birthDateObj: Date;
  age: AgeBreakdown;
  lifeStats: LifeStats;
  zodiac: ZodiacDetails;
  planetaryAges: PlanetaryAge[];
  nextBirthday: NextBirthdayCountdown;
  upcomingWeekendBirthdays: WeekendBirthdayInfo[];
  milestones: MilestoneItem[];
}
