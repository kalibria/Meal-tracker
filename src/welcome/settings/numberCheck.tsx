import {
  maxNumberOfMealsPerDay,
  minNumberOfMealsPerDay,
} from './settings_constant';

export function numberCheck(value: string): boolean {
  const enteredValue = Number(value);
  if (
    enteredValue >= minNumberOfMealsPerDay &&
    enteredValue <= maxNumberOfMealsPerDay
  ) {
    return true;
  } else {
    return false;
  }
}
