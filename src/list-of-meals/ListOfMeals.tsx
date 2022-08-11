import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttons/Button';
import style from '../buttons/btnSettings.module.css';
import { WrapperForMeals } from './WrapperForMeals';
import { KnownRoutes } from '../enumsForApp';

export const ListOfMeals = () => {
  const navigate = useNavigate();
  const goToFirstRouteEl = () => {
    navigate(KnownRoutes.WELCOME);
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
