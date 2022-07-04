import { endMorning, startMorning } from './constant';

class CurrentTime {
  getCurrentHours() {
    const currentHours = new Date().getHours();
    return currentHours;
  }
  getCurrentTime() {
    return Date.now();
  }
  isMorning(time: number) {
    if (time >= startMorning && time < endMorning) return true;
    else return false;
  }
}

export const currentTime = new CurrentTime();
