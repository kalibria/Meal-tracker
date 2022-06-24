import { Settings } from './settings_constant';

class LocalStorage {
  setLocalStorage(storage: Settings) {
    const jsonSettingsScreen = JSON.stringify(storage);
    localStorage.setItem('settings', jsonSettingsScreen);
  }
}

export const myLocalStorage = new LocalStorage();
