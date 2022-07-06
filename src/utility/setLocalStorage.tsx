import { Settings } from '../welcome/settings/settingsConfig';

class LocalStorage {
  isGeneratedMeals: boolean;

  constructor(isGeneratedMeals: boolean) {
    this.isGeneratedMeals = isGeneratedMeals;
  }
  saveSettings(storage: Settings) {
    const jsonSettingsScreen = JSON.stringify(storage);
    localStorage.setItem('settings', jsonSettingsScreen);
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
