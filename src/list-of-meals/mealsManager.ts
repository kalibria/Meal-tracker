import { currentTime } from '../utility/currentTime';
import { serialNumberOfFirstMeal } from './constantOfListOfMeal';
import { LocalStorage, myLocalStorage } from '../utility/LocalStorage';

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
  allMealsInDayBL: Array<IMealBL>;
  timesOfMeals: Array<number>;

  constructor(private myLocalStorage: LocalStorage) {
    this.currentTimeMs = currentTime.getCurrentTime();

    this.timesOfMeals = [];
    this.allMealsInDayBL = [];
  }

  generateMealListBL(): Array<IMealBL> {
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

  getActualMealListBL() {
    const isMealListInLS = myLocalStorage.getMealListBL();

    if (isMealListInLS.length === 0) {
      return this.generateMealListBL();
    } else {
      return myLocalStorage.getMealListBL();
    }
  }

  updateMealTime(mealList: IMealBL[], mealOrderNumEdited: number): IMealBL[] {
    return mealList.reduce((acc: IMealBL[], item, index, _mealList) => {
      const timeBetweenMeals_Min = myLocalStorage.getTimeBetweenMeals();

      const timeBetweenMeals_Ms = timeBetweenMeals_Min * 60 * 1000;

      if (item.number <= mealOrderNumEdited) {
        acc.push(item);

        return acc;
      }

      const newItem = { ...item };

      newItem.mealTime = acc[index - 1].mealTime + timeBetweenMeals_Ms;

      acc.push(newItem);

      return acc;
    }, []);
  }

  private getFirstMealTime(): number {
    return (
      this.currentTimeMs +
      myLocalStorage.getMinutesBeforeFirstMeal() * 60 * 1000
    );
  }

  private accumulateAllMealsTimes(): Array<number> {
    const firstMealTime = this.getFirstMealTime();
    const allMealTimes: number[] = new Array(
      myLocalStorage.getMealsNumber()
    ).fill(1);

    return allMealTimes.reduce((acc: number[], time: number, iteration) => {
      if (iteration === 0) {
        acc[0] = firstMealTime;
        return acc;
      }

      acc[iteration] =
        acc[iteration - 1] + myLocalStorage.getTimeBetweenMeals() * 60 * 1000;

      return acc;
    }, []);
  }
}

export const mealsManagerBL = new MealsManagerBL(myLocalStorage);
