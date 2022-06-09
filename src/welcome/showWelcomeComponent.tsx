import { wasUsed } from './constants';

export class FirstUsing {
  wasUsed = (): boolean => {
    const keyLocalStorage = localStorage.getItem(wasUsed);

    return keyLocalStorage === 'true';
  };

  markAsUsed = (): void => {
    localStorage.setItem(wasUsed, 'false');
  };
}

export const firstEntry = new FirstUsing();
