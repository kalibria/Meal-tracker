import React from 'react';
import style from './meals.module.css';

interface IMeal {
  number: number;
  timeOfMeal: string;
  eatButtonDisabled: boolean;
  handleSubmitForEat: React.EventHandler<React.MouseEvent> | undefined;
}

export const Meal = ({
  number,
  timeOfMeal,
  eatButtonDisabled,
  handleSubmitForEat,
}: IMeal) => {
  return (
    <div className={style.meal}>
      <span>{number} </span>
      <span>{timeOfMeal} </span>
      <button disabled={eatButtonDisabled} onClick={handleSubmitForEat}>
        Eat
      </button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
