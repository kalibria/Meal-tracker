import React from 'react';
import style from './meals.module.css';
import { EatButton } from './buttons/EatButton';
import { EditButton } from './buttons/EditButton';
import { useSelector } from 'react-redux';
import { selectIsSetNewMealTime } from '../redux/selectors';

interface IMeal {
  number: number;
  timeOfMeal: string;
  eatButtonDisabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
  conditionForDeleteBtn: boolean;
  isDeleteBtnActive: boolean;
  eaten: boolean;
  allMealsLength: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Meal = ({
  number,
  timeOfMeal,
  eatButtonDisabled,
  handleSubmitForEat,
  conditionForDeleteBtn,
  isDeleteBtnActive,
  eaten,
  allMealsLength,
  setShowModal,
}: IMeal) => {
  // get from redux

  return (
    <div className={style.meal}>
      <span>{number} </span>
      <span>{timeOfMeal} </span>
      <EatButton
        disabled={eatButtonDisabled}
        handleSubmitForEat={handleSubmitForEat}
        eaten={eaten}
      />
      <EditButton
        allMealsLength={allMealsLength}
        setShowModal={setShowModal}
        mealOrderNumber={number}
      />

      <div>
        {' '}
        {conditionForDeleteBtn && (
          <button disabled={isDeleteBtnActive}>Delete</button>
        )}
      </div>
    </div>
  );
};
