import {
  AgeBreakdown,
  BirthInput,
  CompleteAgeResults,
  LifeStats,
  MilestoneItem,
  NextBirthdayCountdown,
  PlanetaryAge,
  WeekendBirthdayInfo,
  ZodiacDetails,
} from "./types";

export function calculateCompleteAge(input: BirthInput, customNow?: Date): CompleteAgeResults {
  const { birthDate, birthTime } = input;
  const timeStr = birthTime || "00:00";
  const birthDateObj = new Date(`${birthDate}T${timeStr}:00`);

  // Fallback to valid date if parse fails
  const validBirth = isNaN(birthDateObj.getTime()) ? new Date("2000-01-01T00:00:00") : birthDateObj;
  const now = customNow || new Date();

  const diffMs = Math.max(0, now.getTime() - validBirth.getTime());

  // Breakdown calculation
  const age = calculateAgeBreakdown(validBirth, now, diffMs);

  // Life Stats calculation
  const lifeStats = calculateLifeStats(diffMs);

  // Zodiac & Astrological details
  const zodiac = calculateZodiacDetails(validBirth);

  // Planetary Ages
  const planetaryAges = calculatePlanetaryAges(age.totalDays);

  // Next Birthday Countdown
  const nextBirthday = calculateNextBirthday(validBirth, now);

  // Upcoming 5 Birthdays
  const upcomingWeekendBirthdays = calculateWeekendBirthdays(validBirth, now);

  // Life Milestones
  const milestones = calculateMilestones(age, lifeStats, validBirth);

  return {
    birthDateObj: validBirth,
    age,
    lifeStats,
    zodiac,
    planetaryAges,
    nextBirthday,
    upcomingWeekendBirthdays,
    milestones,
  };
}

function calculateAgeBreakdown(birth: Date, now: Date, diffMs: number): AgeBreakdown {
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  let hours = now.getHours() - birth.getHours();
  let minutes = now.getMinutes() - birth.getMinutes();
  let seconds = now.getSeconds() - birth.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // Get total days in previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    weeks: Math.floor(Math.max(0, days) / 7),
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    totalDays,
    totalWeeks,
    totalHours,
    totalMinutes,
    totalSeconds,
    millisecondsLived: diffMs,
  };
}

function calculateLifeStats(diffMs: number): LifeStats {
  const totalMinutes = diffMs / (1000 * 60);
  const totalHours = diffMs / (1000 * 60 * 60);
  const totalDays = diffMs / (1000 * 60 * 60 * 24);

  const hoursSlept = totalHours * 0.333; // 33% sleeping average
  const yearsSlept = hoursSlept / (24 * 365.25);
  const heartbeats = Math.floor(totalMinutes * 80); // 80 bpm average
  const breaths = Math.floor(totalMinutes * 16); // 16 breaths/min
  const stepsWalked = Math.floor(totalDays * 6500); // 6500 steps/day
  const foodEatenKg = Math.floor(totalDays * 1.8); // 1.8kg food/day
  const blinks = Math.floor(totalMinutes * 17); // 17 blinks/min
  const dreamsCount = Math.floor(totalDays * 4.5); // 4.5 dreams/night
  const laughterMinutes = Math.floor(totalDays * 15); // 15 mins/day
  const waterDrankLiters = Math.floor(totalDays * 2.2); // 2.2L water/day

  return {
    hoursSlept: Math.floor(hoursSlept),
    yearsSlept: parseFloat(yearsSlept.toFixed(1)),
    heartbeats,
    breaths,
    stepsWalked,
    foodEatenKg,
    blinks,
    dreamsCount,
    laughterMinutes,
    waterDrankLiters,
  };
}

function calculateZodiacDetails(birth: Date): ZodiacDetails {
  const month = birth.getMonth() + 1; // 1-12
  const day = birth.getDate();
  const year = birth.getFullYear();

  let westernSign = "Capricorn";
  let westernSymbol = "♑";
  let element = "Earth";
  let rulingPlanet = "Saturn";
  let birthstone = "Garnet";
  let trait = "Ambitious & Disciplined";

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    westernSign = "Aries";
    westernSymbol = "♈";
    element = "Fire";
    rulingPlanet = "Mars";
    birthstone = "Diamond";
    trait = "Courageous & Energetic";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    westernSign = "Taurus";
    westernSymbol = "♉";
    element = "Earth";
    rulingPlanet = "Venus";
    birthstone = "Emerald";
    trait = "Patient & Reliable";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    westernSign = "Gemini";
    westernSymbol = "♊";
    element = "Air";
    rulingPlanet = "Mercury";
    birthstone = "Pearl";
    trait = "Adaptable & Curious";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    westernSign = "Cancer";
    westernSymbol = "♋";
    element = "Water";
    rulingPlanet = "Moon";
    birthstone = "Ruby";
    trait = "Intuitive & Compassionate";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    westernSign = "Leo";
    westernSymbol = "♌";
    element = "Fire";
    rulingPlanet = "Sun";
    birthstone = "Peridot";
    trait = "Charismatic & Generous";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    westernSign = "Virgo";
    westernSymbol = "♍";
    element = "Earth";
    rulingPlanet = "Mercury";
    birthstone = "Sapphire";
    trait = "Analytical & Kind";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    westernSign = "Libra";
    westernSymbol = "♎";
    element = "Air";
    rulingPlanet = "Venus";
    birthstone = "Opal";
    trait = "Harmonious & Diplomatic";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    westernSign = "Scorpio";
    westernSymbol = "♏";
    element = "Water";
    rulingPlanet = "Pluto / Mars";
    birthstone = "Topaz";
    trait = "Passionate & Resourceful";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    westernSign = "Sagittarius";
    westernSymbol = "♐";
    element = "Fire";
    rulingPlanet = "Jupiter";
    birthstone = "Turquoise";
    trait = "Optimistic & Adventurous";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    westernSign = "Capricorn";
    westernSymbol = "♑";
    element = "Earth";
    rulingPlanet = "Saturn";
    birthstone = "Garnet";
    trait = "Ambitious & Disciplined";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    westernSign = "Aquarius";
    westernSymbol = "♒";
    element = "Air";
    rulingPlanet = "Uranus";
    birthstone = "Amethyst";
    trait = "Innovative & Independent";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    westernSign = "Pisces";
    westernSymbol = "♓";
    element = "Water";
    rulingPlanet = "Neptune";
    birthstone = "Aquamarine";
    trait = "Artistic & Empathetic";
  }

  // Chinese Zodiac
  const chineseAnimals = [
    { animal: "Monkey", icon: "🐒" },
    { animal: "Rooster", icon: "🐓" },
    { animal: "Dog", icon: "🐕" },
    { animal: "Pig", icon: "🐖" },
    { animal: "Rat", icon: "🐀" },
    { animal: "Ox", icon: "🐂" },
    { animal: "Tiger", icon: "🐅" },
    { animal: "Rabbit", icon: "🐇" },
    { animal: "Dragon", icon: "🐉" },
    { animal: "Snake", icon: "🐍" },
    { animal: "Horse", icon: "🐎" },
    { animal: "Goat", icon: "🐐" },
  ];
  const animalObj = chineseAnimals[year % 12];

  // Chinese Element
  const lastDigit = year % 10;
  let chineseElement = "Metal";
  if (lastDigit === 0 || lastDigit === 1) chineseElement = "Metal";
  else if (lastDigit === 2 || lastDigit === 3) chineseElement = "Water";
  else if (lastDigit === 4 || lastDigit === 5) chineseElement = "Wood";
  else if (lastDigit === 6 || lastDigit === 7) chineseElement = "Fire";
  else if (lastDigit === 8 || lastDigit === 9) chineseElement = "Earth";

  return {
    westernSign,
    westernSymbol,
    element,
    rulingPlanet,
    birthstone,
    chineseZodiac: `${chineseElement} ${animalObj.animal}`,
    chineseAnimal: `${animalObj.icon} ${animalObj.animal}`,
    chineseElement,
    trait,
  };
}

function calculatePlanetaryAges(earthDays: number): PlanetaryAge[] {
  const planets = [
    {
      planet: "Mercury",
      name: "Mercury",
      icon: "☿️",
      period: 87.97,
      description: "Fastest planet! A year here is only 88 Earth days.",
    },
    {
      planet: "Venus",
      name: "Venus",
      icon: "♀️",
      period: 224.7,
      description: "Spins backward and slowly. Extremely hot surface.",
    },
    {
      planet: "Mars",
      name: "Mars",
      icon: "♂️",
      period: 686.98,
      description: "The Red Planet! You are about half your Earth age here.",
    },
    {
      planet: "Jupiter",
      name: "Jupiter",
      icon: "♃",
      period: 4332.59,
      description: "Giant planet! Takes ~11.86 Earth years for one orbit.",
    },
    {
      planet: "Saturn",
      name: "Saturn",
      icon: "♄",
      period: 10759.22,
      description: "Ringed giant! Orbits Sun once every 29.5 Earth years.",
    },
    {
      planet: "Uranus",
      name: "Uranus",
      icon: "♅",
      period: 30685.4,
      description: "Ice giant spinning on its side! 84 Earth year orbit.",
    },
    {
      planet: "Neptune",
      name: "Neptune",
      icon: "♆",
      period: 60189.0,
      description: "Furthest planet! Takes ~165 Earth years for 1 year.",
    },
  ];

  return planets.map((p) => {
    const ageInYears = earthDays / p.period;
    const currentPlanetYearCycle = Math.floor(ageInYears);
    const nextPlanetYearDays = (currentPlanetYearCycle + 1) * p.period;
    const nextPlanetBirthdayDays = Math.ceil(nextPlanetYearDays - earthDays);

    return {
      planet: p.planet,
      name: p.name,
      icon: p.icon,
      ageInYears: parseFloat(ageInYears.toFixed(2)),
      orbitalPeriodDays: p.period,
      nextPlanetBirthdayDays: Math.max(0, nextPlanetBirthdayDays),
      description: p.description,
    };
  });
}

function calculateNextBirthday(birth: Date, now: Date): NextBirthdayCountdown {
  const currentYear = now.getFullYear();

  // Create birthday date for this year
  let nextBday = new Date(
    currentYear,
    birth.getMonth(),
    birth.getDate(),
    birth.getHours(),
    birth.getMinutes()
  );

  // If already passed this year, set to next year
  if (nextBday.getTime() <= now.getTime()) {
    nextBday = new Date(
      currentYear + 1,
      birth.getMonth(),
      birth.getDate(),
      birth.getHours(),
      birth.getMinutes()
    );
  }

  // Previous birthday date
  let lastBday = new Date(
    nextBday.getFullYear() - 1,
    birth.getMonth(),
    birth.getDate(),
    birth.getHours(),
    birth.getMinutes()
  );

  const totalCycleMs = nextBday.getTime() - lastBday.getTime();
  const elapsedMs = now.getTime() - lastBday.getTime();
  const progressPercent = Math.min(100, Math.max(0, (elapsedMs / totalCycleMs) * 100));

  const diffMs = nextBday.getTime() - now.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  const nextAge = nextBday.getFullYear() - birth.getFullYear();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[nextBday.getDay()];

  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
  const nextBirthdayDate = nextBday.toLocaleDateString("en-US", options);

  return {
    days,
    hours,
    minutes,
    seconds,
    progressPercent: parseFloat(progressPercent.toFixed(1)),
    nextAge,
    nextBirthdayDate,
    dayOfWeek,
  };
}

function calculateWeekendBirthdays(birth: Date, now: Date): WeekendBirthdayInfo[] {
  const currentYear = now.getFullYear();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const results: WeekendBirthdayInfo[] = [];
  let startYear = currentYear;

  // Check if birthday passed this year
  const bdayThisYear = new Date(currentYear, birth.getMonth(), birth.getDate());
  if (bdayThisYear.getTime() <= now.getTime()) {
    startYear = currentYear + 1;
  }

  for (let i = 0; i < 5; i++) {
    const targetYear = startYear + i;
    const bday = new Date(targetYear, birth.getMonth(), birth.getDate());
    const dayOfWeekIndex = bday.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    const isWeekend = dayOfWeekIndex === 0 || dayOfWeekIndex === 5 || dayOfWeekIndex === 6; // Friday, Saturday, Sunday

    const dateStr = bday.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const age = targetYear - birth.getFullYear();

    results.push({
      year: targetYear,
      age,
      dateStr,
      dayOfWeek,
      isWeekend,
    });
  }

  return results;
}

function calculateMilestones(
  age: AgeBreakdown,
  lifeStats: LifeStats,
  birth: Date
): MilestoneItem[] {
  const miles: Array<{
    id: string;
    title: string;
    description: string;
    target: number;
    current: number;
    unit: string;
    calcTargetDate?: (birth: Date, target: number) => string;
  }> = [
    {
      id: "days-10k",
      title: "10,000 Days on Earth",
      description: "Reaching 10k days (~27.3 years)",
      target: 10000,
      current: age.totalDays,
      unit: "days",
      calcTargetDate: (b, target) => {
        const d = new Date(b.getTime() + target * 24 * 60 * 60 * 1000);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      },
    },
    {
      id: "heart-1b",
      title: "1 Billion Heartbeats",
      description: "Your heart pulsing 1,000,000,000 times",
      target: 1000000000,
      current: lifeStats.heartbeats,
      unit: "beats",
      calcTargetDate: (b, target) => {
        // 80 bpm = 115200 beats per day
        const daysReq = target / 115200;
        const d = new Date(b.getTime() + daysReq * 24 * 60 * 60 * 1000);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      },
    },
    {
      id: "days-20k",
      title: "20,000 Days on Earth",
      description: "Reaching 20,000 days (~54.7 years)",
      target: 20000,
      current: age.totalDays,
      unit: "days",
      calcTargetDate: (b, target) => {
        const d = new Date(b.getTime() + target * 24 * 60 * 60 * 1000);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      },
    },
    {
      id: "sleep-100k",
      title: "100,000 Hours Slept",
      description: "Over 11.4 total years in dreamland",
      target: 100000,
      current: lifeStats.hoursSlept,
      unit: "hours",
      calcTargetDate: (b, target) => {
        // Slept hours = total hours * 0.333 -> total hours req = target / 0.333
        const totalHoursReq = target / 0.333;
        const d = new Date(b.getTime() + totalHoursReq * 60 * 60 * 1000);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      },
    },
    {
      id: "weeks-1000",
      title: "1,000 Weeks Lived",
      description: "Passing 1,000 weeks of life (~19.1 years)",
      target: 1000,
      current: age.totalWeeks,
      unit: "weeks",
      calcTargetDate: (b, target) => {
        const d = new Date(b.getTime() + target * 7 * 24 * 60 * 60 * 1000);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      },
    },
    {
      id: "heart-2b",
      title: "2 Billion Heartbeats",
      description: "Crossing 2,000,000,000 beats milestone",
      target: 2000000000,
      current: lifeStats.heartbeats,
      unit: "beats",
      calcTargetDate: (b, target) => {
        const daysReq = target / 115200;
        const d = new Date(b.getTime() + daysReq * 24 * 60 * 60 * 1000);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      },
    },
  ];

  return miles.map((m) => {
    const progressPercent = Math.min(100, Math.max(0, (m.current / m.target) * 100));
    const reached = m.current >= m.target;
    const estimatedDate = m.calcTargetDate ? m.calcTargetDate(birth, m.target) : undefined;

    return {
      id: m.id,
      title: m.title,
      description: m.description,
      targetValue: m.target,
      currentValue: m.current,
      unit: m.unit,
      progressPercent: parseFloat(progressPercent.toFixed(1)),
      reached,
      estimatedDate,
    };
  });
}
