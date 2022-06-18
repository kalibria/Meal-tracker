import React, { useContext } from 'react';
import TimePeriodBetweenMeals from './timePeriodBetweenMeals';
import { Settings } from './settings_constant';
import { MyContext } from '../../context/context';
import NumberOfMealsPerDay from './NumberOfMealsPerDay';
import { MinutesToTheFirstMeal } from './minutesToTheFirstMeal';

export const SettingsList = () => {
  const { timeBetweenMeals, numberOfMinutesToFirstMeal, numberOfMealsPerDay } =
    useContext<Settings>(MyContext);

  return (
    <div>
      <ul>
        <li key={timeBetweenMeals.id}>
          Time period between meals: <TimePeriodBetweenMeals />
        </li>
        <li key={numberOfMinutesToFirstMeal.id}>
          Number of meals per day: <NumberOfMealsPerDay />
        </li>
        <li key={numberOfMealsPerDay.id}>
          Number of minutes from waking up to the first meal on the list:{' '}
          <MinutesToTheFirstMeal />
        </li>
      </ul>
      <button>Save</button>
    </div>
  );
};
