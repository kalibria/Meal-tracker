import { IMealBL } from '../list-of-meals/mealsManager';

class ValidationMealTime {
  isCurrMealLaterThanPrev(
    allMeals: IMealBL[],
    editMealOrderNumber: number,
    newTime: number
  ) {
    if (allMeals[editMealOrderNumber - 1].number === 1) {
      return true;
    } else if (newTime > allMeals[editMealOrderNumber - 2].mealTime) {
      return true;
    } else return false;
  }
}

export const validationMealTime = new ValidationMealTime();
