import { IMealBL } from '../list-of-meals/mealsManager';

class ValidationMealTime {
  isCurrentMealTimeLongerPrevious(
    allMeals: IMealBL[],
    editMealOrderNumber: number,
    newTime: number
  ) {
    console.log('currentTime', allMeals[editMealOrderNumber - 1].mealTime);
    console.log('previousTime', allMeals[editMealOrderNumber - 2].mealTime);
    if (newTime > allMeals[editMealOrderNumber - 2].mealTime) {
      return true;
    } else return false;
  }
}

export const validationMealTime = new ValidationMealTime();
