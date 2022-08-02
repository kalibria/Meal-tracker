import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';
import { currentTime } from '../utility/currentTime';
import style from './btnSettings.module.css';
import { SettingsBtn } from './settingsBtn';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from '../list-of-meals/Meals';

export const WindowWithButton = () => {
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  const navigate = useNavigate();
  const goToMealList = () => {
    myLocalStorage.setMealList(mealsManagerBL.getMealListBL());
    navigate('/mealList');
  };

  const handleClick = () => {
    goToMealList();
  };
  return (
    <div>
      <div className={style.btn_settings_position}>
        <SettingsBtn />
      </div>
      <div className={style.btn_position}>
        <Button
          text={isMorning ? 'Good morning!!!' : 'Plan your meals'}
          handleClick={handleClick}
          dataTest={'goodMorning'}
        ></Button>
      </div>
    </div>
  );
};
