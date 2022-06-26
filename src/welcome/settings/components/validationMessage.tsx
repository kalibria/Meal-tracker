import React from 'react';
import { Error } from './error';
import { numberCheck } from '../numberCheck';

interface Props {
  numberMeals: string;
}

export const ValidationMessage = ({ numberMeals }: Props) => {
  const getNumberCheck = numberCheck(numberMeals);
  return <>{!getNumberCheck ? <Error /> : null}</>;
};
