import React, { useState } from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';
import { ListOfMeals } from './list-of-meals/listOfMeals';
import { currentTime } from './utility/currentTime';
import { GoodMorningScreenBtn } from './goodMorningScreen/goodMorningScreenBtn';

function App() {
  const [pressBtn, setPressBtn] = useState(false);
  console.log('изменить setPressBtn послк последнего приема пищи сегодня');
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  // const isMorning = false;
  const handleClick = () => {
    setPressBtn(true);
  };
  return firstEntry.wasUsed() ? (
    <div>
      {isMorning && !pressBtn && (
        // <button onClick={handleClick} data-testid='goodMorning'>
        //   Good morning!!!
        // </button>
        <GoodMorningScreenBtn
          text={'Good morning!!!'}
          handleClick={handleClick}
          dataTest={'goodMorning'}
        />
      )}
      {!isMorning && !pressBtn && (
        <GoodMorningScreenBtn
          text={'Plan your meals'}
          handleClick={handleClick}
          dataTest={'planeMeals'}
        />
      )}
      {pressBtn ? <ListOfMeals /> : null}
    </div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
