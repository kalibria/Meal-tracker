import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttonsWindow/button';

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
      <Button text={'End the day'} handleClick={handleClick} />
    </div>
  );
};
