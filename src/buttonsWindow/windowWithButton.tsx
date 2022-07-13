import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';
import { currentTime } from '../utility/currentTime';

export const WindowWithButton = () => {
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  const navigate = useNavigate();
  const goToMealList = () => {
    navigate('/mealList');
  };

  const handleClick = () => {
    goToMealList();
  };
  return (
    <div>
      <Button
        text={isMorning ? 'Good morning!!!' : 'Plan your meals'}
        handleClick={handleClick}
        dataTest={'goodMorning'}
      ></Button>
    </div>
  );
};
