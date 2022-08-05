import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttons/Button';
import { currentTime } from '../utility/currentTime';
import style from '../buttons/btnSettings.module.css';
import { SettingsBtn } from '../buttons/settingsBtn';
import { KnownRoutes } from '../enumsForApp';

export const WindowWithButton = () => {
  const isMorning = currentTime.isMorning(currentTime.getCurrentHours());
  const navigate = useNavigate();
  const goToMealList = () => {
    navigate(KnownRoutes.MEAL_LIST);
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
