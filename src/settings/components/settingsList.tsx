import React, { useEffect, useState } from 'react';
import TimePeriodBetweenMeals from './timePeriodBetweenMeals';

import NumberOfMealsPerDay from './NumberOfMealsPerDay';
import { MinutesToFirstMeal } from './minutesToFirstMeal';

import { INewSettings, WrapperForSaveButton } from './wrapperForSaveButton';
import { myLocalStorage } from '../../utility/LocalStorage';
import { settingMapper } from './setting.mapper';
import { settingsScreen } from '../settingsConfig';

export const SettingsList = () => {
  const [settingsFromLS, setSettingsFromL] = useState<INewSettings | null>(
    null
  );

  useEffect(() => {
    const newSettings = myLocalStorage.getSettings();

    if (newSettings) {
      setSettingsFromL(settingsFromLS);
      const hours = Math.floor(newSettings.timeBetweenMeals.time / 60);
      const minutes = newSettings.timeBetweenMeals.time - hours * 60;

      setHourBetweenMeals(hours);
      setMinuteBetweenMeals(minutes);
      setMinuteToFirstMeal(newSettings.numberOfMinutesToFirstMeal.time);
      setNumberMeals(newSettings.numberOfMealsPerDay.time);
    }
  }, [settingsFromLS]);

  const [hourBetweenMeals, setHourBetweenMeals] = React.useState(
    settingMapper.getHourFromBLToUI(settingsScreen.timeBetweenMeals.time)
  );
  const [minuteBetweenMeals, setMinuteBetweenMeals] = React.useState(
    settingMapper.getMinsFromBLToUI(settingsScreen.timeBetweenMeals.time)
  );
  const [numberMeals, setNumberMeals] = React.useState(
    settingsScreen.numberOfMealsPerDay.time.toString()
  );
  const [minuteToFirstMeal, setMinuteToFirstMeal] = React.useState(
    settingsScreen.numberOfMinutesToFirstMeal.time.toString()
  );

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
        setNumberMeals={setNumberMeals}
        setMinute={setMinuteToFirstMeal}
      />
    </div>
  );
};
