import { currentTime } from '../utility/currentTime';
import { serialNumberOfFirstMeal } from './constantOfListOfMeal';
import { LocalStorage, myLocalStorage } from '../utility/LocalStorage';
import { INewSettings } from '../settings/components/wrapperForSaveButton';

export interface IMealBL {
  number: number;
  time: number;
  eaten: boolean;
  edit: boolean;
  delete: boolean;
}

export const mealBL: IMealBL = {
  number: serialNumberOfFirstMeal,
  time: 0,
  eaten: false,
  edit: false,
  delete: false,
};

export class MealsManagerBL {
  currentTime: number;
  dataSettings: INewSettings | null;
  allMealsInDayBL: Array<IMealBL>;
  timesOfMeals: Array<number>;
  mealsNumberInDay: number;
  timeBetweenMeals: number;
  minutesBeforeFirstMeal: number;

  constructor(private myLocalStorage: LocalStorage) {
    this.dataSettings = this.myLocalStorage.getSettings();
    this.currentTime = currentTime.getCurrentTime();

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

  accumulateAllMealsTimes(): Array<number> {
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

  getMealListBL() {
    return this.accumulateAllMealsTimes();
    // console.log('allTimes', this.timesOfMeals);
    // .map((time) => {
    //   mealBL.number += 1;
    //   mealBL.time = time;
    //   this.allMealsInDayBL.push(mealBL);
    // });
    // return this.allMealsInDayBL;
  }

  private getFirstMealTime(): number {
    if (this.dataSettings) {
      const mealTime = this.currentTime + this.minutesBeforeFirstMeal;
      // this.timesOfMeals.push(mealTime);
      console.log('firstTime', this.timesOfMeals);
      return mealTime;
    }

    return Date.now();
  }
}

export const mealsManagerBL = new MealsManagerBL(myLocalStorage);
