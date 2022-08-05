import { INewSettings } from '../settings/components/wrapperForSaveButton';
import { Settings, settingsScreen } from '../settings/settingsConfig';
import { IMealItemUi } from '../list-of-meals/meal.mapper';

export class LocalStorage {
  isGeneratedMeals: boolean;

  constructor(isGeneratedMeals: boolean) {
    this.isGeneratedMeals = isGeneratedMeals;
  }

  setSettings(data: INewSettings | Settings): void {
    const jsonSettingsScreen = JSON.stringify(data);
    localStorage.setItem('settings', jsonSettingsScreen);
  }

  getSettings(): INewSettings | null {
    const settings = localStorage.getItem('settings');

    if (!settings) return null;

    return JSON.parse(settings) as INewSettings;
  }

  getMealsNumber(): number {
    const settings = localStorage.getItem('settings');
    if (settings) {
      const numberOFMealsString = JSON.parse(settings).numberOfMealsPerDay.time;
      return Number(numberOFMealsString);
    }
    return settingsScreen.numberOfMealsPerDay.time;
  }

  getMinutesBeforeFirstMeal() {
    const settings = localStorage.getItem('settings');
    if (settings) {
      const minutesBeforeMealString =
        JSON.parse(settings).numberOfMinutesToFirstMeal.time;
      return Number(minutesBeforeMealString);
    }
    return settingsScreen.numberOfMinutesToFirstMeal.time;
  }

  getTimeBetweenMeals() {
    const settings = localStorage.getItem('settings');
    if (settings) {
      const timeBetweenMealsString = JSON.parse(settings).timeBetweenMeals.time;
      return Number(timeBetweenMealsString);
    }
    return settingsScreen.timeBetweenMeals.time;
  }

  setMealList(data: IMealItemUi[]) {
    const jsonMealList = JSON.stringify(data);
    localStorage.setItem('mealList', jsonMealList);
  }

  // getMealList(): IMealItemUi[] | null {
  //   const mealList = localStorage.getItem('mealList');
  //
  //   if (!mealList) return null;
  //
  //   return JSON.parse(mealList) as IMealItemUi[];
  // }
}

export const myLocalStorage = new LocalStorage(false);
