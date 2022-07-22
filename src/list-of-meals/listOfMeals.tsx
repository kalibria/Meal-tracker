import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttonsWindow/button';
import style from '../buttonsWindow/btnSettings.module.css';
import { Meal } from './meal';

export const ListOfMeals = () => {
  const navigate = useNavigate();
  const goToFirstRouteEl = () => {
    navigate('/secondEl');
  };
  const handleClick = () => {
    goToFirstRouteEl();
  };
  return (
    <div>
      <Meal />
      <div className={style.btn_position}>
        <Button text={'End the day'} handleClick={handleClick} />
      </div>
    </div>
  );
};
