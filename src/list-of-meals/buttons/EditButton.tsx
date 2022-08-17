import React from 'react';
import { Button } from '../../buttons/Button';
import { useDispatch } from 'react-redux';
import { setEditMealOrderNumber } from '../mealsSlice';

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
    dispatch(setEditMealOrderNumber(mealOrderNumber));
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
