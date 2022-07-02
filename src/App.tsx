import React from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';
import { ListOfMeals } from './list-of-meals/listOfMeals';
import { currentTime } from './utility/currentTime';

function App() {
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  const handleClick = (): React.ReactNode => {
    return <ListOfMeals />;
  };
  return firstEntry.wasUsed() ? (
    <div>
      {isMorning && (
        <button onClick={handleClick} data-testid='goodMorning'>
          Good morning!!!
        </button>
      )}
      <ListOfMeals />
    </div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
