import React from 'react';
import { Button } from '../../buttons/Button';
import { useDispatch } from 'react-redux';
import { deleteLastMeal } from '../mealsSlice';

interface IDeleteButton {
  disabled: boolean;
  mealOrderNumber: number;
}

export const DeleteButton = ({ disabled, mealOrderNumber }: IDeleteButton) => {
  const dispatch = useDispatch();
  const handleClickOnDelete = () => {
    dispatch(deleteLastMeal(mealOrderNumber));
  };

  return (
    <div>
      <Button
        handleClick={handleClickOnDelete}
        text={'Delete'}
        disabled={disabled}
      />
    </div>
  );
};
