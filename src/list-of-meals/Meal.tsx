import React from 'react';
import style from './meals.module.css';

interface IMeal {
  number: number;
  timeOfMeal: string;
  disabled: boolean;
  handleSubmitForEat: React.EventHandler<React.MouseEvent> | undefined;
}

export const Meal = ({
  number,
  timeOfMeal,
  disabled,
  handleSubmitForEat,
}: IMeal) => {
  return (
    <div className={style.meal}>
      <span>{number} </span>
      <span>{timeOfMeal} </span>
      <button disabled={!disabled} onClick={handleSubmitForEat}>
        Eat
      </button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
