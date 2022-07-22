import React, { useContext, useState } from 'react';
import TimePeriodBetweenMeals from './timePeriodBetweenMeals';

import { MyContext } from '../../context/context';
import NumberOfMealsPerDay from './NumberOfMealsPerDay';
import { MinutesToFirstMeal } from './minutesToFirstMeal';

import { Settings } from '../settingsConfig';
import { WrapperForSaveButton } from './wrapperForSaveButton';

export const SettingsList = () => {
  const { timeBetweenMeals, numberOfMinutesToFirstMeal, numberOfMealsPerDay } =
    useContext<Settings>(MyContext);
  const [hourBetweenMeals, setHourBetweenMeals] = React.useState('');
  const [minuteBetweenMeals, setMinuteBetweenMeals] = React.useState('');
  const [numberMeals, setNumberMeals] = React.useState(
    numberOfMealsPerDay.time.toString()
  );
  const [minuteToFirstMeal, setMinuteToFirstMeal] = React.useState(
    numberOfMinutesToFirstMeal.time.toString()
  );

  const [isNumberValid, setIsNumberValid] = useState(true);

  return (
    <div>
      <ul>
        <li key={timeBetweenMeals.id}>
          Time period between meals:{' '}
          <TimePeriodBetweenMeals
            hourBetweenMeals={hourBetweenMeals}
            setHourBetweenMeals={setHourBetweenMeals}
            minuteBetweenMeals={minuteBetweenMeals}
            setMinuteBetweenMeals={setMinuteBetweenMeals}
          />
        </li>
        <li key={numberOfMinutesToFirstMeal.id}>
          Number of meals per day:{' '}
          <NumberOfMealsPerDay
            numberMeals={numberMeals}
            setNumberMeals={setNumberMeals}
            numberCheck={isNumberValid}
            setNumberCheck={setIsNumberValid}
          />
        </li>
        <li key={numberOfMealsPerDay.id}>
          Number of minutes from waking up to the first meal on the list:{' '}
          <MinutesToFirstMeal
            minute={minuteToFirstMeal}
            setMinute={setMinuteToFirstMeal}
          />
        </li>
      </ul>
      <WrapperForSaveButton
        hourBetweenMeals={hourBetweenMeals}
        minuteBetweenMeals={minuteBetweenMeals}
        numberMeals={numberMeals}
        minuteToFirstMeal={minuteToFirstMeal}
        numberCheck={isNumberValid}
      />
    </div>
  );
};
