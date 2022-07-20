import React from 'react';
import style from './meals.module.css';

interface IMeal {
  number: number;
  timeOfMeal: string;
}

export const Meal = ({ number, timeOfMeal }: IMeal) => {
  return (
    <div className={style.meal}>
      <span>{number} </span>
      <span>{timeOfMeal} </span>
      <button>Eat</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
