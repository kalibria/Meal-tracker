import React, { useEffect, useState } from 'react';

import { currentTime } from '../utility/currentTime';
import { useSelector } from 'react-redux';
import {
  selectNumberOfMealsPerDay,
  selectNumberOfMinutesToFirstMeal,
  selectTimeBetweenMeals,
} from '../redux/selectors';

export const WrapperForMeal = () => {
  // const [meals, setMeals] = useState(() => {
  //   return [];
  // });
  // const myCurrentTime = currentTime.getCurrentTime();
  // const selectMinAfterWakingUp = useSelector(selectNumberOfMinutesToFirstMeal);
  // const timeBetweenMeals = useSelector(selectTimeBetweenMeals);
  // const numberOfMeals = useSelector(selectNumberOfMealsPerDay);
  //
  // useEffect(() => {
  //   const mealsSettings: IMeals = {
  //     currentTime: myCurrentTime,
  //     minutesAfterWakingUp: selectMinAfterWakingUp,
  //     timeBetweenMeals: timeBetweenMeals,
  //     numberOfMeals: numberOfMeals,
  //   };
  //
  //   const myMeal = new Meals(mealsSettings);
  //   console.log('myMeal', myMeal);
  //   console.log('times', myMeal.setArrUiTimesOfMeal());
  //
  //   const arrNumbersOfMeal = myMeal.setArrNumbersOfMeal();
  //   const timeForFirstMeal = myMeal.firstMealHourMin();
  // }, [myCurrentTime, numberOfMeals, selectMinAfterWakingUp, timeBetweenMeals]);
  // const subsequentMeals = myMeal.subsequentMeals(
  //   new Date(Date.parse(timeForFirstMeal))
  // );

  // const mealEl = arrNumbersOfMeal.map((num) => (
  //   <Meal key={num} number={num} timeOfMeal={timeForFirstMeal} />
  // ));

  // const mealEl = arrNumbersOfMeal.map((num) => {
  //   if (num === 1) {
  //     <Meal key={num} number={num} timeOfMeal={timeForFirstMeal} />;
  //   } else {
  //     // <Meal key={num} number={num} timeOfMeal={} />;
  //   }
  // });
  // return <div>{mealEl}</div>;
  return <div>geellloo</div>;
};
