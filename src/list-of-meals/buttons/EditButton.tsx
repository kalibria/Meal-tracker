import React from 'react';
import { Button } from '../../buttons/Button';
import { batch, useDispatch } from 'react-redux';
import {
  setEatenMeal,
  setEditMealOrderNumber,
  setNewHourAfterEdit,
  setNewMinutesAfterEdit,
} from '../mealsSlice';
import { timeManager } from '../../utility/time.manager';
import { myLocalStorage } from '../../utility/LocalStorage';
import { mealsManagerBL } from '../mealsManager';
import { currentTime } from '../../utility/currentTime';

interface IEditButton {
  allMealsLength: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  mealOrderNumber: number;
}

export const EditButton = ({
  allMealsLength,
  setShowModal,
  mealOrderNumber,
}: IEditButton) => {
  const dispatch = useDispatch();

  const handleSubmitForEdit = () => {
    setShowModal(true);

    const mealBL = myLocalStorage.getMealListBL()[mealOrderNumber - 1];

    batch(() => {
      dispatch(setEditMealOrderNumber(mealOrderNumber));
      dispatch(setNewHourAfterEdit(timeManager.getHourUIFromTimeBl(mealBL)));
      dispatch(
        setNewMinutesAfterEdit(timeManager.getMinutesUIFromTimeBl(mealBL))
      );
    });
  };

  return (
    <div>
      {allMealsLength === 6 && (
        <Button
          disabled={false}
          handleClick={handleSubmitForEdit}
          text={'Edit'}
        />
      )}
    </div>
  );
};
