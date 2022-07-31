import { format } from 'date-fns';
import { IMealBL } from './Meals';

export interface IMealItemUi {
  number: number;
  mealTime: string;
  eaten: boolean;
  edit: boolean;
  delete: boolean;
}

class MealMapper {
  fromBLToUi(mealList: Array<IMealBL>): Array<IMealItemUi> {
    return mealList.reduce((acc: IMealItemUi[], mealItem) => {
      const timeForUI = format(mealItem.mealTime, "HH ':' mm");

      const itemForUI = { ...mealItem, mealTime: timeForUI };
      acc.push(itemForUI);

      return acc;
    }, []);
  }
}

export const mealMapper = new MealMapper();
