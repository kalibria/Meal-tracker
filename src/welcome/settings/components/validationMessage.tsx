import React from 'react';
import { Error } from './error';
import { validation } from '../../../utility/validation';

interface Props {
  numberMeals: string;
  numberCheck: boolean;
  setNumberCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ValidationMessage = ({
  numberMeals,
  numberCheck,
  setNumberCheck,
}: Props) => {
  setNumberCheck(validation.numberCheck(numberMeals));
  // const getNumberCheck = validation.numberCheck(numberMeals);
  return <>{!numberCheck ? <Error /> : null}</>;
};
