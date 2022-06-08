import { wasUsed } from './constants';

export class FirstUsing {
  wasUsed = (): boolean => {
    const keyLocalStorage = localStorage.getItem(wasUsed);
    return Boolean(keyLocalStorage);
  };

  markAsUsed = (): void => {
    localStorage.setItem(wasUsed, 'false');
  };
}
