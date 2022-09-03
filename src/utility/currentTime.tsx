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
  getCurrentMinutes() {
    const currentMinutes = new Date().getMinutes();
    return currentMinutes;
  }

  isMorning(time: number) {
    if (time >= startMorning && time < endMorning) return true;
    else return false;
  }
  setTimeBetweenMealsInMin(hours: number, minutes: number) {
    const timeBetweenMealsInMinutes =
      Number(hours) * minutesInHour + Number(minutes);

    return timeBetweenMealsInMinutes;
  }
}

export const currentTime = new CurrentTime();
