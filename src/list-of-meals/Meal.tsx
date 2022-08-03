import React from 'react';
import style from './meals.module.css';

interface IMeal {
  number: number;
  timeOfMeal: string;
  eatButtonDisabled: boolean;
  handleSubmitForEat: React.EventHandler<React.MouseEvent> | undefined;
  conditionForDeleteBtn: boolean;
  isDeleteBtnActive: boolean;
}

export const Meal = ({
  number,
  timeOfMeal,
  eatButtonDisabled,
  handleSubmitForEat,
  conditionForDeleteBtn,
  isDeleteBtnActive,
}: IMeal) => {
  return (
    <div className={style.meal}>
      <span>{number} </span>
      <span>{timeOfMeal} </span>
      <button disabled={eatButtonDisabled} onClick={handleSubmitForEat}>
        Eat
      </button>
      <button>Edit</button>
      <div>
        {' '}
        {conditionForDeleteBtn && (
          <button disabled={isDeleteBtnActive}>Delete</button>
        )}
      </div>
    </div>
  );
};
