import React from 'react';
import { Button } from './button';
import { ListOfMeals } from '../list-of-meals/listOfMeals';


interface IWindowWithButtons {
  conditionsForGMBtn: boolean;
  handleClick(): void;
  conditionsForPMBtn: boolean;
  isGeneratedMeals: string | null;
  isEndTheDay: string | null;
  setIsGeneratedMeals: React.Dispatch<React.SetStateAction<string | null>>;
  setIsEndTheDay: React.Dispatch<React.SetStateAction<string | null>>;
}

export const WindowWithButtons = ({
  conditionsForGMBtn,
  handleClick,
  conditionsForPMBtn,
  isGeneratedMeals,
  isEndTheDay,
  setIsGeneratedMeals,
  setIsEndTheDay,
}: IWindowWithButtons) => {
  return (
    <div>
      {conditionsForGMBtn && (
        <Button
          text={'Good morning!!!'}
          handleClick={handleClick}
          dataTest={'goodMorning'}
        />
      )}
      {conditionsForPMBtn && (
        <Button
          text={'Plan your meals'}
          handleClick={handleClick}
          dataTest={'planeMeals'}
        />
      )}
      {isGeneratedMeals && !isEndTheDay && (
        <ListOfMeals
          setIsGeneratedMeals={setIsGeneratedMeals}
          setIsEndTheDay={setIsEndTheDay}
        />
      )}
    </div>
  );
};
