import React from 'react';
import {
  maxNumberOfMealsPerDay,
  minNumberOfMealsPerDay,
} from './settings_constant';
import style from '../welcom.module.css';

export const Error = () => {
  return (
    <p className={style.error}>
      Minimum number is {minNumberOfMealsPerDay} maximum{' '}
      {maxNumberOfMealsPerDay}{' '}
    </p>
  );
};
