import { INewSettings } from '../settings/components/wrapperForSaveButton';
import { Settings } from '../settings/settingsConfig';

class LocalStorage {
  isGeneratedMeals: boolean;

  constructor(isGeneratedMeals: boolean) {
    this.isGeneratedMeals = isGeneratedMeals;
  }
  setSettings(data: INewSettings | Settings) {
    const jsonSettingsScreen = JSON.stringify(data);
    localStorage.setItem('settings', jsonSettingsScreen);
  }
  getSettings() {
    const settings = localStorage.getItem('settings');
    if (!settings) return null;
    return JSON.parse(settings) as INewSettings;
  }
}

export const myLocalStorage = new LocalStorage(false);
