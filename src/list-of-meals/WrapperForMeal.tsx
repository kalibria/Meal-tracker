import React from 'react';
import { IMeals, Meals } from './Meals';
import { currentTime } from '../utility/currentTime';
import { useSelector } from 'react-redux';
import {
  selectNumberOfMealsPerDay,
  selectNumberOfMinutesToFirstMeal,
  selectTimeBetweenMeals,
} from '../redux/selectors';
import { Meal } from './Meal';

export const WrapperForMeal = () => {
  const myCurrentTime = currentTime.getCurrentTime();
  const selectMinAfterWakingUp = useSelector(selectNumberOfMinutesToFirstMeal);
  const timeBetweenMeals = useSelector(selectTimeBetweenMeals);
  const numberOfMeals = useSelector(selectNumberOfMealsPerDay);

  const mealAsObj: IMeals = {
    currentTime: myCurrentTime,
    minutesAfterWakingUp: selectMinAfterWakingUp,
    timeBetweenMeals: timeBetweenMeals,
    numberOfMeals: numberOfMeals,
  };
  const myMeal = new Meals(mealAsObj);
  const arrNumbersOfMeal = myMeal.getArrNumbersOfMeal();
  const timeForFirstMeal = myMeal.firstMealTime();
  console.log('time', timeForFirstMeal);
  const mealEl = arrNumbersOfMeal.map((num) => (
    <Meal key={num} number={num} timeOfMeal={timeForFirstMeal} />
  ));

  return <div>{mealEl}</div>;
};
