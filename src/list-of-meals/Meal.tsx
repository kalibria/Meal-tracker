import React from 'react';
import style from './meals.module.css';
import { EatButton } from './EatButton';
import { IMealItemUi } from './meal.mapper';

interface IMeal {
  number: number;
  timeOfMeal: string;
  eatButtonDisabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
  conditionForDeleteBtn: boolean;
  isDeleteBtnActive: boolean;
  eatenIcon: string;
}

export const Meal = ({
  number,
  timeOfMeal,
  eatButtonDisabled,
  handleSubmitForEat,
  conditionForDeleteBtn,
  isDeleteBtnActive,
  eatenIcon,
}: IMeal) => {
  return (
    <div className={style.meal}>
      <span>{number} </span>
      <span>{timeOfMeal} </span>
      <EatButton
        disabled={eatButtonDisabled}
        handleSubmitForEat={handleSubmitForEat}
        eatenIcon={eatenIcon}
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
