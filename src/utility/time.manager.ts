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
    const time = parse(timeUI, "HH ':' mm", new Date());
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

  // latestMealTime = (time: number) => {
  //   // const timeOfLastMealTimeBL = this.timeFromUIToBL(timeOfLastMeal);
  //   const defaultLatestMealTimeBL = this.timeFromUIToBL(defaultLatestTime);
  //   const timeBetweenMealsMS =
  //     myLocalStorage.getTimeBetweenMeals() * minutesInHour * 1000;
  //
  //   const latestMealTime = time +
  //
  //   if (time > timeOfLastMealTimeBL) {
  //     if (time + timeBetweenMealsMS < defaultLatestMealTimeBL) {
  //       return time + timeBetweenMealsMS;
  //     } else {
  //       return 0;
  //     }
  //   } else {
  //     return time + timeBetweenMealsMS;
  //   }
  // };
}

export const timeManager = new TimeManager();
