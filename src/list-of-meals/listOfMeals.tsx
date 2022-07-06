import React from 'react';
import { Button } from '../buttonsWindow/button';
import { myLocalStorage } from '../utility/setLocalStorage';
import { useDispatch } from 'react-redux';
import { setKey } from '../buttonsWindow/SliceKeysOfScreenWithBtn';

interface IListOfMeals {
  setIsGeneratedMeals: React.Dispatch<React.SetStateAction<string | null>>;
  setIsEndTheDay: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ListOfMeals = ({
  setIsGeneratedMeals,
  setIsEndTheDay,
}: IListOfMeals) => {
  const keyDispatch = useDispatch();
  const handleClick = () => {
    myLocalStorage.setIsGeneratedMeals(false);
    setIsGeneratedMeals(myLocalStorage.getIsGeneratedMeals());
    myLocalStorage.setEndTheDay(true);
    setIsEndTheDay(myLocalStorage.getEndTheDay());
    keyDispatch(setKey());
  };
  return (
    <div>
      <div>Meals</div>
      <Button text={'End the day'} handleClick={handleClick} />
    </div>
  );
};
