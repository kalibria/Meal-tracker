import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from '../../welcom.module.css';
import { useDispatch, batch } from 'react-redux';

import {
  setNumberOfMealsPerDay,
  setNumberOfMinutesToFirstMeal,
  setTimeBetweenMeals,
} from '../settingsSlice';

import { settingsScreen } from '../settings_constant';

interface Props {
  hourBetweenMeals: string;
  minuteBetweenMeals: string;
  numberMeals: string;
  minuteToFirstMeal: string;
}

export default function SaveButton({
  hourBetweenMeals,
  minuteBetweenMeals,
  numberMeals,
  minuteToFirstMeal,
}: Props) {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    batch(() => {
      dispatch(
        setTimeBetweenMeals({
          hours: Number(hourBetweenMeals),
          minutes: Number(minuteBetweenMeals),
        })
      );
      dispatch(setNumberOfMealsPerDay(Number(numberMeals)));
      dispatch(setNumberOfMinutesToFirstMeal(minuteToFirstMeal));
    });
    const jsonSettingsScreen = JSON.stringify(settingsScreen);
    localStorage.setItem('settings', jsonSettingsScreen);
  };
  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button variant='outlined' onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
}
