import React from 'react';
import style from './meals.module.css';
import { Eat_button } from './Eat_button';

interface IMeal {
  number: number;
  timeOfMeal: string;
  eatButtonDisabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
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
      <Eat_button
        disabled={eatButtonDisabled}
        handleSubmitForEat={handleSubmitForEat}
      />
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
