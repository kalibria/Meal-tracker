import React from 'react';
import { Button } from '../button/button';
import { myLocalStorage } from '../utility/setLocalStorage';

interface IListOfMeals {
  setIsGeneratedMeals: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ListOfMeals = ({ setIsGeneratedMeals }: IListOfMeals) => {
  const handleClick = () => {
    myLocalStorage.setIsGeneratedMeals(false);
    setIsGeneratedMeals(myLocalStorage.getIsGeneratedMeals());
    myLocalStorage.setEndTheDay(true);
  };
  return (
    <div>
      <div>Meals</div>
      <Button text={'End the day'} handleClick={handleClick} />
    </div>
  );
};
