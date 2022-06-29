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

import { myLocalStorage } from '../setLocalStorage';
import { store } from '../../../redux/store';
import { validation } from '../../../utility/validation';

interface Props {
  hourBetweenMeals: string;
  minuteBetweenMeals: string;
  numberMeals: string;
  minuteToFirstMeal: string;
  numberCheck: boolean;
}

export default function SaveButton({
  hourBetweenMeals,
  minuteBetweenMeals,
  numberMeals,
  minuteToFirstMeal,
  numberCheck,
}: Props) {
  const dispatch = useDispatch();

  const isEmptyString = validation.emptyStringCheck(
    hourBetweenMeals,
    minuteBetweenMeals
  );

  const isDisabledButton = validation.disabledSaveButtonCheck(
    isEmptyString,
    numberCheck
  );

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
    myLocalStorage.setLocalStorage(store.getState().settings);
  };

  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button
        variant='outlined'
        onClick={handleSubmit}
        disabled={isDisabledButton}
      >
        Save
      </Button>
    </Stack>
  );
}
