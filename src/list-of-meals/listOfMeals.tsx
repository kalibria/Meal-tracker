import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttonsWindow/button';
import style from '../buttonsWindow/btnSettings.module.css';

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
      <div>Meals</div>
      <div className={style.btn_position}>
        <Button text={'End the day'} handleClick={handleClick} />
      </div>
    </div>
  );
};
