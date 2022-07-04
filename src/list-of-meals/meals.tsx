interface IMeals {
  currentTime: number;
  minutesAfterWakingUp: number;
  timeBetweenMeals: number;
}

export class Meals {
  currentTime: number;
  minutesAfterWakingUp: number;
  timeBetweenMeals: number;

  constructor({ currentTime, minutesAfterWakingUp, timeBetweenMeals }: IMeals) {
    this.currentTime = currentTime;
    this.minutesAfterWakingUp = minutesAfterWakingUp;
    this.timeBetweenMeals = timeBetweenMeals;
  }
  firstMealTime() {
    return this.currentTime + this.minutesAfterWakingUp;
  }
  subsequentMeals(timeOfMeal: number) {
    return timeOfMeal + this.timeBetweenMeals;
  }
}
