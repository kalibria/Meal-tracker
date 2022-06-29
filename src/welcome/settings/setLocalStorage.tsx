import { Settings } from './settings_constant';

class LocalStorage {
  setLocalStorage(storage: Settings) {
    const jsonSettingsScreen = JSON.stringify(storage);
    localStorage.setItem('settings', jsonSettingsScreen);
  }
}

console.log('fix Local Storage');

export const myLocalStorage = new LocalStorage();
