import { format, parse } from 'date-fns';
import { IMealBL } from '../list-of-meals/mealsManager';
import {
  defaultLatestTime,
  timeOfLastMeal,
} from '../list-of-meals/constantOfListOfMeal';
import { myLocalStorage } from './LocalStorage';
import { minutesInHour } from '../settings/settings_constant';

class TimeManager {
  timeFromBLToUI(timeMs: number) {
    return format(timeMs, "HH ':' mm");
  }

  timeFromUIToBL(timeUI: string) {
    const time = parse(timeUI, "HH':'mm", new Date());
    return time.getTime();
  }

  getHourUIFromTimeBl(meal: IMealBL) {
    const timeUi = this.timeFromBLToUI(meal.mealTime);
    const hourUi = timeUi.slice(0, 2);
    return hourUi;
  }

  getMinutesUIFromTimeBl(meal: IMealBL) {
    const timeUi = this.timeFromBLToUI(meal.mealTime);
    const minutesUi = timeUi.slice(5, 7);
    return minutesUi;
  }

  latestMealTime = (time: number) => {
    const timeOfLastMealTimeBL = this.timeFromUIToBL(timeOfLastMeal);
    const defaultLatestMealTimeBL = this.timeFromUIToBL(defaultLatestTime);

    if (time > timeOfLastMealTimeBL) {
      return defaultLatestMealTimeBL;
    } else {
      return time + myLocalStorage.getTimeBetweenMeals() * minutesInHour * 1000;
    }
  };
}

export const timeManager = new TimeManager();
