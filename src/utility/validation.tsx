import {
  maxNumberOfMealsPerDay,
  minNumberOfMealsPerDay,
} from '../welcome/settings/settings_constant';

class Validation {
  numberCheck(value: string): boolean {
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
  emptyStringCheck(valueHours: string, valueMinutes: string) {
    if (valueHours === '' || valueMinutes === '') return true;
    else return false;
  }

  disabledSaveButtonCheck(
    stringOfTimeCheck: boolean,
    numberOfMealsCheck: boolean
  ) {
    if (stringOfTimeCheck || !numberOfMealsCheck) return true;
    else return false;
  }
}

export const validation = new Validation();
