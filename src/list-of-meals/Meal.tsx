import React from 'react';
import style from './meals.module.css';
import { EatButton } from './buttons/EatButton';
import { EditButton } from './buttons/EditButton';

interface IMeal {
  number: number;
  timeOfMeal: string;
  eatButtonDisabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
  conditionForDeleteBtn: boolean;
  isDeleteBtnActive: boolean;
  eaten: boolean;
  allMealsLength: number;
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
}: IMeal) => {
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
        handleSubmitForEat={handleSubmitForEat}
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
