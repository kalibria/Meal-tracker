import { endMorning, startMorning } from './constant';
import { minutesInHour } from '../settings/settings_constant';

class CurrentTime {
  getCurrentHours() {
    const currentHours = new Date().getHours();
    return currentHours;
  }
  getCurrentTime() {
    const currentTime = new Date().getTime();
    return currentTime;
  }
  isMorning(time: number) {
    if (time >= startMorning && time < endMorning) return true;
    else return false;
  }
  setTimeBetweenMealsInMin(hours: string, minutes: string) {
    const timeBetweenMealsInMinutes =
      Number(hours) * minutesInHour + Number(minutes);

    return timeBetweenMealsInMinutes;
  }
}

export const currentTime = new CurrentTime();
