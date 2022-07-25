import React, { useEffect, useState } from 'react';
import TimePeriodBetweenMeals from './timePeriodBetweenMeals';

import NumberOfMealsPerDay from './NumberOfMealsPerDay';
import { MinutesToFirstMeal } from './minutesToFirstMeal';

import { INewSettings, WrapperForSaveButton } from './wrapperForSaveButton';
import { myLocalStorage } from '../../utility/LocalStorage';

export const SettingsList = () => {
  const [settingsFromLS, setSettingsFromL] = useState<INewSettings | null>(
    null
  );

  useEffect(() => {
    console.log('hi');
    const newSettings = myLocalStorage.getSettings();
    console.log(settingsFromLS?.timeBetweenMeals.time);

    if (newSettings) {
      setSettingsFromL(settingsFromLS);
      const hours = Math.floor(newSettings.timeBetweenMeals.time / 60);
      const minutes = newSettings.timeBetweenMeals.time - hours * 60;

      console.log({ hours });
      console.log({ minutes });
      setHourBetweenMeals(hours);
      setMinuteBetweenMeals(minutes);
      setMinuteToFirstMeal(newSettings.numberOfMinutesToFirstMeal.time);
      setNumberMeals(newSettings.numberOfMealsPerDay.time);
    }
  }, [settingsFromLS]);

  const [hourBetweenMeals, setHourBetweenMeals] = React.useState(2);
  const [minuteBetweenMeals, setMinuteBetweenMeals] = React.useState(20);
  const [numberMeals, setNumberMeals] = React.useState('6');
  const [minuteToFirstMeal, setMinuteToFirstMeal] = React.useState('21');

  const [isMealCountValid, setIsMealCountValid] = useState(true);

  return (
    <div>
      <ul>
        <li key={settingsFromLS?.timeBetweenMeals.id}>
          Time period between meals:{' '}
          <TimePeriodBetweenMeals
            hourBetweenMeals={hourBetweenMeals}
            setHourBetweenMeals={setHourBetweenMeals}
            minuteBetweenMeals={minuteBetweenMeals}
            setMinuteBetweenMeals={setMinuteBetweenMeals}
          />
        </li>
        <li key={settingsFromLS?.numberOfMealsPerDay.id}>
          Number of meals per day:{' '}
          <NumberOfMealsPerDay
            numberMeals={numberMeals}
            setNumberMeals={setNumberMeals}
            numberCheck={isMealCountValid}
            setNumberCheck={setIsMealCountValid}
          />
        </li>
        <li key={settingsFromLS?.numberOfMinutesToFirstMeal.id}>
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
        isValidMealsCount={isMealCountValid}
        // setHourBetweenMeals={setHourBetweenMeals}
        // setMinuteBetweenMeals={setMinuteBetweenMeals}
        setNumberMeals={setNumberMeals}
        setMinute={setMinuteToFirstMeal}
      />
    </div>
  );
};
