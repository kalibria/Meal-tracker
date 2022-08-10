import { format } from 'date-fns';
import { IMealBL } from './mealsManager';
import { iconEaten } from './constantOfListOfMeal';
import { timeManager } from '../utility/time.manager';
import { myLocalStorage } from '../utility/LocalStorage';

export interface IMealItemUi {
  number: number;
  mealTime: string;
  eaten: boolean;
  eatButtonDisabled: boolean;
  eatenIcon: string;
  edit: boolean;
  delete: boolean;
}

export class MealMapper {
  fromBLToUi(mealList: Array<IMealBL>): Array<IMealItemUi> {
    return mealList.reduce(
      (acc: IMealItemUi[], mealItem, index, allOriginalMeals) => {
        const timeForUI = format(mealItem.mealTime, "HH ':' mm");

        const itemForUI: IMealItemUi = {
          ...mealItem,
          mealTime: timeForUI,
          eatButtonDisabled: MealMapper.isEatButtonDisabled(
            mealItem,
            allOriginalMeals
          ),
          eatenIcon: mealItem.eaten ? iconEaten : '',
        };
        acc.push(itemForUI);

        return acc;
      },
      []
    );
  }

  fromUIToBL(mealsUI: IMealItemUi[], mealOrder: number, time: number) {
    const newMeals = [...mealsUI];
    const lastMealNumber = newMeals.length - 1;

    const newTimeForEatenMealUI = timeManager.timeFromBLToUI(time);

    newMeals[mealOrder - 1].mealTime = newTimeForEatenMealUI;

    for (let i = mealOrder; i <= lastMealNumber; i++) {
      const mealTimeMS = timeManager.timeFromUIToBL(newMeals[i - 1].mealTime);
      const newTimeMS =
        mealTimeMS + myLocalStorage.getTimeBetweenMeals() * 60 * 1000;

      newMeals[i].mealTime = timeManager.timeFromBLToUI(newTimeMS);
    }

    newMeals[mealOrder - 1].eatenIcon = iconEaten;

    if (mealOrder - 1 === lastMealNumber) {
      newMeals[mealOrder - 1].eatButtonDisabled = true;
      newMeals[mealOrder - 1].eaten = true;
    } else {
      newMeals[mealOrder - 1].eaten = true;

      newMeals[mealOrder - 1].eatButtonDisabled = true;
      newMeals[mealOrder].eatButtonDisabled = false;
    }
    return newMeals;
  }

  mealsFromUiToBl = (mealsUi: IMealItemUi[]): IMealBL[] => {
    return mealsUi.reduce((acc: IMealBL[], item: IMealItemUi) => {
      const timeBL = timeManager.timeFromUIToBL(item.mealTime);
      const newItem: IMealBL = {
        ...item,
        mealTime: timeBL,
      };
      acc.push(newItem);

      return acc;
    }, []);
  };

  static isEatButtonDisabled(meal: IMealBL, meals: IMealBL[]): boolean {
    const enabled = false;
    const disabled = true;

    const noMealIsEaten = meals.every((meal) => !meal.eaten);

    if (meal.number === 1 && noMealIsEaten) {
      return enabled;
    }

    const prevMeal = meals[meal.number - 2];
    const lastMeal = meals.at(-1);

    if (meal.number === lastMeal?.number && prevMeal?.eaten) {
      return meal.eaten;
    }

    if (prevMeal?.eaten && !meal.eaten) {
      return enabled;
    }

    return disabled;
  }
}

export const mealMapper = new MealMapper();
