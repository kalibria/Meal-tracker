import React from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';
import { ListOfMeals } from './list-of-meals/listOfMeals';
import { currentTime } from './utility/currentTime';

function App() {
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());

  return firstEntry.wasUsed() ? (
    <div>
      {isMorning && <p>Good morning!!!</p>}
      <ListOfMeals />
    </div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
