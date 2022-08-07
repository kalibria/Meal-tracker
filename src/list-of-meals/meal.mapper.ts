import { format } from 'date-fns';
import { IMealBL } from './mealsManager';
import { iconEaten } from './constantOfListOfMeal';
import { timeManager } from '../utility/time.manager';

export interface IMealItemUi {
  number: number;
  mealTime: string;
  eaten: boolean;
  eatButtonDisabled: boolean;
  eatenIcon: string;
  edit: boolean;
  delete: boolean;
}

class MealMapper {
  fromBLToUi(mealList: Array<IMealBL>): Array<IMealItemUi> {
    return mealList.reduce((acc: IMealItemUi[], mealItem) => {
      const timeForUI = format(mealItem.mealTime, "HH ':' mm");

      const itemForUI: IMealItemUi = {
        ...mealItem,
        mealTime: timeForUI,
        eatButtonDisabled: mealItem.eaten || mealItem.number !== 1,
        eatenIcon: '',
      };
      acc.push(itemForUI);

      return acc;
    }, []);
  }

  fromUIToBL(mealsUI: IMealItemUi[], mealOrder: number, time: number) {
    const newMeals = [...mealsUI];
    console.log('newMeals', newMeals);
    console.log('mealsUI', mealsUI);
    const lastMealNumber = newMeals.length - 1;

    const newTimeForUI = timeManager.timeFromBLToUI(time);
    newMeals[mealOrder - 1].mealTime = newTimeForUI;
    newMeals[mealOrder - 1].eatenIcon = iconEaten;

    if (mealOrder - 1 === lastMealNumber) {
      newMeals[mealOrder - 1].eatButtonDisabled = true;
      newMeals[mealOrder - 1].eaten = true;
      // setIsDeleteBtnDisable(true);
    } else {
      console.log('mealOrder', mealOrder);
      newMeals[mealOrder - 1].eaten = true;
      console.log('newMeals[mealOrder - 1]', newMeals[mealOrder - 1]);
      newMeals[mealOrder - 1].eatButtonDisabled = true;
      newMeals[mealOrder].eatButtonDisabled = false;
    }
    return newMeals;
  }
}

export const mealMapper = new MealMapper();
