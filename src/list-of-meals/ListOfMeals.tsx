import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttonsWindow/button';
import style from '../buttonsWindow/btnSettings.module.css';
import { WrapperForMeals } from './WrapperForMeals';

export const ListOfMeals = () => {
  const navigate = useNavigate();
  const goToFirstRouteEl = () => {
    navigate('/welcome');
  };
  const handleClick = () => {
    goToFirstRouteEl();
  };
  return (
    <div>
      <WrapperForMeals />
      <div className={style.btn_position}>
        <Button text={'End the day'} handleClick={handleClick} />
      </div>
    </div>
  );
};
