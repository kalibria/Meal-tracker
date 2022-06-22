interface TimeDate {
  minutesArray: Array<number>;
  hoursArray: Array<number>;
  minutesFromWakingUp: number[];
}

export class Time implements TimeDate {
  minutesArray: Array<number>;
  hoursArray: Array<number>;
  minutesFromWakingUp: number[];

  constructor(
    minutesArray: Array<number>,
    hoursArray: Array<number>,
    minutesFromWakingUp: Array<number>
  ) {
    this.minutesArray = minutesArray;
    this.hoursArray = hoursArray;
    this.minutesFromWakingUp = minutesFromWakingUp;
    this.prepareMinuteFromWakingUp();
    this.prepareMinutesForTimeBetweenMeals();
    this.prepareHoursForTimeBetweenMeals();
  }

  private prepareMinuteFromWakingUp() {
    for (let i = 6; i <= 60; ++i) {
      this.minutesFromWakingUp.push(i);
    }
  }

  private prepareMinutesForTimeBetweenMeals() {
    for (let i = 1; i <= 60; ++i) {
      this.minutesArray.push(i);
    }
  }

  private prepareHoursForTimeBetweenMeals() {
    for (let i = 2; i <= 2; ++i) {
      this.hoursArray.push(i);
    }
  }

  convertMinutesArr = (data: Array<number>): Array<string> => {
    const zeroPad = (num: number, places: number) =>
      String(num).padStart(places, '0');
    const minutesArrayStartFromZero = this.minutesArray.map((num) =>
      zeroPad(num, 2)
    );
    return minutesArrayStartFromZero;
  };
}

export const time = new Time([0], [1], [5]);
