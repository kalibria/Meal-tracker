import React, { useContext } from 'react';
import TimePeriodBetweenMeals from '../components/timePeriodBetweenMeals';
import { Settings } from '../settings_constant';
import { MyContext } from '../../../context/context';
import NumberOfMealsPerDay from './NumberOfMealsPerDay';
import { MinutesToTheFirstMeal } from './minutesToTheFirstMeal';
import SaveButton from './saveButtom';
import { numberOfMealsPerDay } from '../../../redux/selectors';

export const SettingsList = () => {
  const { timeBetweenMeals, numberOfMinutesToFirstMeal, numberOfMealsPerDay } =
    useContext<Settings>(MyContext);
  const [hourBetweenMeals, setHourBetweenMeals] = React.useState('');
  const [minuteBetweenMeals, setMinuteBetweenMeals] = React.useState('');
  const [numberMeals, setNumberMeals] = React.useState(
    numberOfMealsPerDay.name.toString()
  );

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
          />
        </li>
        <li key={numberOfMealsPerDay.id}>
          Number of minutes from waking up to the first meal on the list:{' '}
          <MinutesToTheFirstMeal />
        </li>
      </ul>
      <SaveButton />
    </div>
  );
};