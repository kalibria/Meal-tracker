// export interface IMeals {
//   currentTime: number;
//   minutesAfterWakingUp: number;
//   timeBetweenMeals: number;
//   numberOfMeals: number;
// }
//
// export class Meals {
//   currentTime: number;
//   minutesAfterWakingUp: number;
//   timeBetweenMeals: number;
//   numberOfMeals: number;
//
//   constructor({
//     currentTime,
//     minutesAfterWakingUp,
//     timeBetweenMeals,
//     numberOfMeals,
//   }: IMeals) {
//     this.currentTime = currentTime;
//     this.minutesAfterWakingUp = minutesAfterWakingUp;
//     this.timeBetweenMeals = timeBetweenMeals;
//     this.numberOfMeals = numberOfMeals;
//   }
//   firstMealTime() {
//     return this.currentTime + this.minutesAfterWakingUp;
//   }
//   firstMealHourMin() {
//     const dataStr = this.currentTime + this.minutesAfterWakingUp;
//     const hours = new Date(dataStr).getHours();
//     const minutes = new Date(dataStr).getMinutes();
//     return `${hours} : ${minutes}`;
//   }
//   subsequentMeals(timeOfMeal: number) {
//     return timeOfMeal + this.timeBetweenMeals;
//   }
//
//   setArrUiTimesOfMeal() {
//     const allMealTimes: Array<number> = [];
//
//     allMealTimes.fill(0, 0, this.numberOfMeals);
//     allMealTimes[0] = this.firstMealTime();
//
//     const realMealTimes: Array<number> = [];
//
//     realMealTimes.push(allMealTimes[0]);
//
//     for (let i = 0; i <= allMealTimes.length; i++) {
//       allMealTimes[i] += this.timeBetweenMeals;
//       realMealTimes.push();
//     }
//
//     return realMealTimes;
//   }
//
//   setArrNumbersOfMeal() {
//     const arrNumberOfMeals = [];
//     for (let i = 1; i <= this.numberOfMeals; i++) {
//       arrNumberOfMeals.push(i);
//     }
//     return arrNumberOfMeals;
//   }
// }

import { currentTime } from '../utility/currentTime';

export interface IMealListComponent {
  number: number;
  time: number;
  eaten: boolean;
  edit: boolean;
  delete: boolean;
}

export class ComponentsOfAMeal {
  currentTime: number;
  dataSettings: string | null;

  constructor(currentTime: number) {
    this.currentTime = currentTime;
    this.dataSettings = localStorage.getItem('settings');
  }

  getDataSettingsAfterPars() {
    if (!this.dataSettings) return;
    else return JSON.parse(this.dataSettings);
  }

  getFirstMealTime() {
    const minutesAfterWakingUp =
      this.getDataSettingsAfterPars().numberOfMinutesToFirstMeal.time;
    return minutesAfterWakingUp + this.currentTime;
  }

  // getSubsequentMealTime(previousTime: number) {
  //   const timeBetweenMeal = localStorage.getItem();
  // }
}

const timeFirstMeal = new ComponentsOfAMeal(currentTime.getCurrentTime());
console.log('firstTime', timeFirstMeal.getFirstMealTime());

export class ComponentsOfAMealList {
  mealListComponent: {
    number: number;
    time: number;
    eaten: boolean;
    edit: boolean;
    delete: boolean;
  };

  constructor(mealListComponent: IMealListComponent) {
    this.mealListComponent = mealListComponent;
  }

  createMealList() {}
}
