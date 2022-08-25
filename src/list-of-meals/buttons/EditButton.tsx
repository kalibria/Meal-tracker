import React from 'react';
import { Button } from '../../buttons/Button';
import { batch, useDispatch } from 'react-redux';
import {
  isSetNewMeal,
  setEatenMeal,
  setEditMealOrderNumber,
  setNewHourAfterEdit,
  setNewMinutesAfterEdit,
  setNewTimeAfterEditMeal,
} from '../mealsSlice';
import { timeManager } from '../../utility/time.manager';
import { myLocalStorage } from '../../utility/LocalStorage';
import { mealsManagerBL } from '../mealsManager';
import { currentTime } from '../../utility/currentTime';
import { minutes } from '../../settings/time';

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
      dispatch(
        setNewTimeAfterEditMeal({
          hour: timeManager.getHourUIFromTimeBl(mealBL),
          minutes: timeManager.getMinutesUIFromTimeBl(mealBL),
        })
      );
    });
    dispatch(isSetNewMeal(true));
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
