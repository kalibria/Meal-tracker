import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from '../settings.module.css';
import { useDispatch, batch, useSelector } from 'react-redux';

import {
  setNumberOfMealsPerDay,
  setNumberOfMinutesToFirstMeal,
  setTimeBetweenMeals,
} from '../settingsSlice';

import { myLocalStorage } from '../../utility/setLocalStorage';
import { validation } from '../../utility/validation';
import { selectSettings } from '../../redux/selectors';
import { firstEntry } from '../../welcome/showWelcomeComponent';
import { useEffect } from 'react';

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
  const navigate = useNavigate();

  const goToSecondRouteEl = () => {
    navigate('/button');
  };
  const isEmptyString = validation.isEmptyString(
    hourBetweenMeals,
    minuteBetweenMeals
  );

  const isDisabledButton = validation.isDisabledSaveButton(
    isEmptyString,
    numberCheck
  );

  const handleSubmit = () => {
    goToSecondRouteEl();
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

    firstEntry.markAsUsed();
  };
  const settings = useSelector(selectSettings);
  useEffect(() => {
    myLocalStorage.saveSettings(settings);
  }, [settings]);

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
