import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../buttons/Button';
import { currentTime } from '../utility/currentTime';
import style from '../buttons/btnSettings.module.css';
import { SettingsBtn } from '../buttons/settingsBtn';
import { KnownRoutes } from '../enumsForApp';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from '../list-of-meals/mealsManager';
import { setListOfMeals } from '../list-of-meals/mealsSlice';
import { useDispatch } from 'react-redux';

export const WindowWithButton = () => {
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMealList = useCallback(() => {
    navigate(KnownRoutes.MEAL_LIST);
  }, [navigate]);

  const handleClick = () => {
    goToMealList();
    myLocalStorage.setMealListBL(mealsManagerBL.generateMealListBL());
    dispatch(setListOfMeals(myLocalStorage.getMealListBL()));
  };

  useEffect(() => {
    if (myLocalStorage.getMealListBL().length > 0) {
      goToMealList();
    }
  }, [goToMealList]);

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
