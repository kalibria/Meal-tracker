import { format } from 'date-fns';

class TimeManager {
  timeFromBLToUI(timeMs: number) {
    return format(timeMs, "HH ':' mm");
  }
}

export const timeManager = new TimeManager();
