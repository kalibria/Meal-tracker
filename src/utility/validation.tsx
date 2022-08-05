import {
  maxNumberOfMealsPerDay,
  minNumberOfMealsPerDay,
} from '../settings/settings_constant';

class Validation {
  isNumber(value: string): boolean {
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
  isValidNumOfHoursAndMinutes(valueHours: number, valueMinutes: number) {
    if (isNaN(valueHours) || isNaN(valueMinutes)) return false;
    else return true;
  }

  isDisabledSaveButton(
    stringOfTimeCheck: boolean,
    numberOfMealsCheck: boolean
  ) {
    return !stringOfTimeCheck || !numberOfMealsCheck;
  }
}

export const validation = new Validation();
