export interface IMeals {
  currentTime: number;
  minutesAfterWakingUp: number;
  timeBetweenMeals: number;
  numberOfMeals: number;
}

export class Meals {
  currentTime: number;
  minutesAfterWakingUp: number;
  timeBetweenMeals: number;
  numberOfMeals: number;

  constructor({
    currentTime,
    minutesAfterWakingUp,
    timeBetweenMeals,
    numberOfMeals,
  }: IMeals) {
    this.currentTime = currentTime;
    this.minutesAfterWakingUp = minutesAfterWakingUp;
    this.timeBetweenMeals = timeBetweenMeals;
    this.numberOfMeals = numberOfMeals;
  }
  firstMealTime() {
    return this.currentTime + this.minutesAfterWakingUp;
  }
  subsequentMeals(timeOfMeal: number) {
    return timeOfMeal + this.timeBetweenMeals;
  }
  getArrNumbersOfMeal() {
    const arrNumberOfMeals = [];
    for (let i = 1; i < this.numberOfMeals; i++) {
      arrNumberOfMeals.push(i);
    }
    return arrNumberOfMeals;
  }
}
