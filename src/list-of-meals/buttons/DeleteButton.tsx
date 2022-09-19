import React, { useEffect, useState } from 'react';
import { Button } from '../../buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLastMeal } from '../mealsSlice';
import { minNumMealsPerDay } from '../constantOfListOfMeal';
import { selectMealsList } from '../../redux/selectors';

import { useSnackbar } from 'notistack';

interface IDeleteButton {
  mealOrderNumber: number;
}

export const DeleteButton = ({ mealOrderNumber }: IDeleteButton) => {
  const dispatch = useDispatch();
  const lengthOfMealsArray = useSelector(selectMealsList).length;
  const allMeals = useSelector(selectMealsList);
  const lastMealIsEaten = allMeals[lengthOfMealsArray - 1].eaten;

  const [isDisabled, setIsDisabled] = useState(() => {
    return lengthOfMealsArray <= minNumMealsPerDay;
  });

  useEffect(() => {
    if (lastMealIsEaten) {
      setIsDisabled(true);
    }
  }, [lastMealIsEaten]);

  const handleClickOnDelete = () => {
    if (lengthOfMealsArray > minNumMealsPerDay) {
      dispatch(deleteLastMeal(mealOrderNumber));
    }
  };

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (lengthOfMealsArray <= minNumMealsPerDay) {
      enqueueSnackbar(message, {
        variant: 'warning',
        autoHideDuration: 5000,
        preventDuplicate: true,
      });
    }
  }, [enqueueSnackbar, lengthOfMealsArray]);
  const message = 'There cannot be fewer than three meals per day';

  return (
    <div>
      <Button
        handleClick={handleClickOnDelete}
        text={'Delete'}
        disabled={isDisabled}
      />
    </div>
  );
};
