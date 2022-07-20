import { INewSettings } from '../settings/components/saveButton';

class LocalStorage {
  isGeneratedMeals: boolean;

  constructor(isGeneratedMeals: boolean) {
    this.isGeneratedMeals = isGeneratedMeals;
  }
  saveSettings(storage: INewSettings) {
    const jsonSettingsScreen = JSON.stringify(storage);
    localStorage.setItem('settings', jsonSettingsScreen);
  }
  getSettings() {
    const settings = localStorage.getItem('settings');
    if (!settings) return null;
    return JSON.parse(settings) as INewSettings;
  }
  setEndTheDay(endTheDay: boolean) {
    localStorage.setItem('isEndTheDay', endTheDay.toString());
    return endTheDay;
  }
  getEndTheDay() {
    return localStorage.getItem('isEndTheDay');
  }
  getIsGeneratedMeals() {
    return localStorage.getItem('isGeneratedMeals');
  }
  setIsGeneratedMeals(isGenerated: boolean) {
    this.isGeneratedMeals = isGenerated;
    localStorage.setItem('isGeneratedMeals', this.isGeneratedMeals.toString());
    return localStorage.getItem('isGeneratedMeals');
  }
}

export const myLocalStorage = new LocalStorage(false);
console.log('settings', myLocalStorage.getSettings());
