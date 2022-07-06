import React, { useState } from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';

import { currentTime } from './utility/currentTime';

import { myLocalStorage } from './utility/setLocalStorage';
import { WindowWithButtons } from './buttonsWindow/windowWithButtons';
import { useSelector } from 'react-redux';
import { keyOfScreenWithBtn } from './redux/selectors';

function App() {
  const [pressBtn, setPressBtn] = useState(false);
  const [isGeneratedMeals, setIsGeneratedMeals] = useState(
    myLocalStorage.getIsGeneratedMeals()
  );
  const [isEndTheDay, setIsEndTheDay] = useState(myLocalStorage.getEndTheDay());
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  // const isMorning = false;
  const conditionsForGMBtn = isMorning && !pressBtn && !isGeneratedMeals;
  const conditionsForPMBtn = !isMorning && !pressBtn && !isGeneratedMeals;

  const handleClick = () => {
    setPressBtn(true);
    setIsGeneratedMeals(myLocalStorage.setIsGeneratedMeals(true));
  };
  return firstEntry.wasUsed() ? (
    <WindowWithButtons
      conditionsForGMBtn={conditionsForGMBtn}
      conditionsForPMBtn={conditionsForPMBtn}
      handleClick={handleClick}
      isEndTheDay={isEndTheDay}
      setIsEndTheDay={setIsEndTheDay}
      isGeneratedMeals={isGeneratedMeals}
      setIsGeneratedMeals={setIsGeneratedMeals}

    />
  ) : (
    <WelcomeComponent />
  );
}

export default App;
