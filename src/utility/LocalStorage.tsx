import { INewSettings } from '../settings/components/wrapperForSaveButton';
import { Settings } from '../settings/settingsConfig';
import { IMealBL } from '../list-of-meals/Meals';

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

  setMeal(meals: Array<IMealBL>) {
    const jsonMeal = JSON.stringify(meals);
    localStorage.setItem('meals', jsonMeal);
  }
  getMeal() {
    const meal = localStorage.getItem('meal');
    if (!meal) return null;
    return JSON.parse(meal) as IMealBL;
  }
}

export const myLocalStorage = new LocalStorage(false);
