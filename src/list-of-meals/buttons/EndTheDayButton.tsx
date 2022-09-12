import React from 'react';
import { Button } from '../../buttons/Button';
import { myLocalStorage } from '../../utility/LocalStorage';

export const EndTheDayButton = () => {
  const handleClick = () => {
    myLocalStorage.removeItem('mealList');
  };

  return <Button text={'End the day'} handleClick={handleClick} />;
};
