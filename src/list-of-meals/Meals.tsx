import { currentTime } from '../utility/currentTime';
import { serialNumberOfFirstMeal } from './constantOfListOfMeal';
import { LocalStorage, myLocalStorage } from '../utility/LocalStorage';
import { INewSettings } from '../settings/components/wrapperForSaveButton';

export interface IMealBL {
  number: number;
  mealTime: number;
  eaten: boolean;
  edit: boolean;
  delete: boolean;
}

export const defaultMealBL: IMealBL = {
  number: 0,
  mealTime: 0,
  eaten: false,
  edit: false,
  delete: false,
};

export class MealsManagerBL {
  currentTimeMs: number;
  dataSettings: INewSettings | null;
  allMealsInDayBL: Array<IMealBL>;
  timesOfMeals: Array<number>;
  mealsNumberInDay: number;
  timeBetweenMeals: number;
  minutesBeforeFirstMeal: number;

  constructor(private myLocalStorage: LocalStorage) {
    this.dataSettings = this.myLocalStorage.getSettings();
    this.currentTimeMs = currentTime.getCurrentTime();

    if (this.dataSettings) {
      this.mealsNumberInDay = +this.dataSettings.numberOfMealsPerDay.time;
      this.timeBetweenMeals = this.dataSettings.timeBetweenMeals.time;
      this.minutesBeforeFirstMeal =
        +this.dataSettings.numberOfMinutesToFirstMeal.time;
    } else {
      this.mealsNumberInDay = 0;
      this.timeBetweenMeals = 0;
      this.minutesBeforeFirstMeal = 0;
    }
    this.timesOfMeals = [];
    this.allMealsInDayBL = [];
  }

  getMealListBL(): Array<IMealBL> {
    const allMealsTimesMs = this.accumulateAllMealsTimes();

    return allMealsTimesMs.reduce((acc: IMealBL[], time, iteration) => {
      const itemOfListBL = {
        ...defaultMealBL,
        number: iteration + serialNumberOfFirstMeal,
        mealTime: time,
      };

      acc.push(itemOfListBL);

      return acc;
    }, []);
  }

  private getFirstMealTime(): number {
    if (this.dataSettings) {
      const mealTime =
        this.currentTimeMs + this.minutesBeforeFirstMeal * 60 * 1000;
      // this.timesOfMeals.push(mealTime);

      return mealTime;
    }

    return Date.now();
  }

  private accumulateAllMealsTimes(): Array<number> {
    const firstMealTime = this.getFirstMealTime();
    const allMealTimes: number[] = new Array(this.mealsNumberInDay).fill(1);

    return allMealTimes.reduce((acc: number[], time: number, iteration) => {
      if (iteration === 0) {
        acc[0] = firstMealTime;
        return acc;
      }

      acc[iteration] = acc[iteration - 1] + this.timeBetweenMeals * 60 * 1000;

      return acc;
    }, []);
  }
}

export const mealsManagerBL = new MealsManagerBL(myLocalStorage);
