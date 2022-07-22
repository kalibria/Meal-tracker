import React from 'react';
import { IMeals, Meals } from './meals';
import { currentTime } from '../utility/currentTime';
import { useSelector } from 'react-redux';
import {
  selectNumberOfMealsPerDay,
  selectNumberOfMinutesToFirstMeal,
  selectTimeBetweenMeals,
} from '../redux/selectors';

export const Meal = () => {
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
  console.log('arrNumbers', arrNumbersOfMeal);
  console.log('myMeal', myMeal);

  return (
    <div>
      <p>Number</p>
      <>Time of meal </>
      <button>Eat</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
