import React, { useState } from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';
import { ListOfMeals } from './list-of-meals/listOfMeals';
import { currentTime } from './utility/currentTime';
import { Button } from './button/button';
import { myLocalStorage } from './utility/setLocalStorage';

function App() {
  const [pressBtn, setPressBtn] = useState(false);
  const [isGeneratedMeals, setIsGeneratedMeals] = useState(
    myLocalStorage.getIsGeneratedMeals()
  );

  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  // const isMorning = false;
  const handleClick = () => {
    setPressBtn(true);

    setIsGeneratedMeals(myLocalStorage.setIsGeneratedMeals(true));
  };
  return firstEntry.wasUsed() ? (
    <div>
      {isMorning && !pressBtn && !isGeneratedMeals && (
        <Button
          text={'Good morning!!!'}
          handleClick={handleClick}
          dataTest={'goodMorning'}
        />
      )}
      {!isMorning && !pressBtn && !isGeneratedMeals && (
        <Button
          text={'Plan your meals'}
          handleClick={handleClick}
          dataTest={'planeMeals'}
        />
      )}
      {isGeneratedMeals && (
        <ListOfMeals setIsGeneratedMeals={setIsGeneratedMeals} />
      )}
    </div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
