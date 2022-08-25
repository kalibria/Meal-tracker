import { IMealBL } from '../list-of-meals/mealsManager';

class ValidationMealTime {
  isCurrentMealTimeLongerPrevious(
    allMeals: IMealBL[],
    editMealOrderNumber: number,
    newTime: number
  ) {
    if (newTime > allMeals[editMealOrderNumber - 2].mealTime) {
      return true;
    } else return false;
  }
}

export const validationMealTime = new ValidationMealTime();
