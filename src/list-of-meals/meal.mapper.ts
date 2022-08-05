import { format } from 'date-fns';
import { IMealBL } from './mealsManager';

export interface IMealItemUi {
  number: number;
  mealTime: string;
  eaten: boolean;
  eatButtonDisabled: boolean;
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
      };
      acc.push(itemForUI);

      return acc;
    }, []);
  }
}

export const mealMapper = new MealMapper();
