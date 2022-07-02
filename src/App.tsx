import React, { useState } from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';
import { ListOfMeals } from './list-of-meals/listOfMeals';
import { currentTime } from './utility/currentTime';

function App() {
  const [pressBtn, setPressBtn] = useState(false);
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  const handleClick = (): React.ReactNode => {
    setPressBtn(true);
    return <ListOfMeals />;
  };
  return firstEntry.wasUsed() ? (
    <div>
      {isMorning && !pressBtn && (
        <button onClick={handleClick} data-testid='goodMorning'>
          Good morning!!!
        </button>
      )}
      {!isMorning || pressBtn ? <ListOfMeals /> : null}
    </div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
