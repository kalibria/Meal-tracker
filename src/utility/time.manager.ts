import { format, parse } from 'date-fns';

class TimeManager {
  timeFromBLToUI(timeMs: number) {
    return format(timeMs, "HH ':' mm");
  }

  timeFromUIToBL(timeUI: string) {
    const time = parse(timeUI, "HH ':' mm", new Date());
    return time.getTime();
  }
}

export const timeManager = new TimeManager();
