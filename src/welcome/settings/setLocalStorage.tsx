import { Settings } from './settingsConfig';

class LocalStorage {
  saveSettings(storage: Settings) {
    const jsonSettingsScreen = JSON.stringify(storage);
    localStorage.setItem('settings', jsonSettingsScreen);
  }
}

export const myLocalStorage = new LocalStorage();
