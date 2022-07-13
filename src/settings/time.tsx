import {
  maxHoursBetweenMeals,
  minutesInHour,
  startMinuteBetweenMeals,
} from './settings_constant';

interface TimeDate {
  minutes: Array<number>;
  hours: Array<number>;
  minutesFromWakingUp: number[];
}

export class Time implements TimeDate {
  minutes: Array<number>;
  hours: Array<number>;
  minutesFromWakingUp: number[];

  constructor(
    minutes: Array<number>,
    hours: Array<number>,
    minutesFromWakingUp: Array<number>
  ) {
    this.minutes = minutes;
    this.hours = hours;
    this.minutesFromWakingUp = minutesFromWakingUp;
    this.prepareMinuteFromWakingUp();
    this.prepareMinutesForTimeBetweenMeals();
    this.prepareHoursForTimeBetweenMeals();
  }

  private prepareMinuteFromWakingUp() {
    for (let i = 6; i <= 60; ++i) {
      this.minutesFromWakingUp.push(i);
    }
  }

  private prepareMinutesForTimeBetweenMeals() {
    for (let i = startMinuteBetweenMeals; i <= minutesInHour; ++i) {
      this.minutes.push(i);
    }
  }

  private prepareHoursForTimeBetweenMeals() {
    for (let i = maxHoursBetweenMeals; i <= maxHoursBetweenMeals; ++i) {
      this.hours.push(i);
    }
  }

  convertMinutes = (minutes: Array<number>): Array<string> => {
    const zeroPad = (num: number, places: number) =>
      String(num).padStart(places, '0');
    const minutesStartFromZero = minutes.map((num) => zeroPad(num, 2));
    return minutesStartFromZero;
  };
}

export const time = new Time([0], [1], [5]);

export const hours = time.hours;
export const minutes = time.convertMinutes(time.minutes);
export const minutesFromWakingUp = time.convertMinutes(
  time.minutesFromWakingUp
);
