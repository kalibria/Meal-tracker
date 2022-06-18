import React, { useState } from 'react';
import classes from './welcom.module.css';
import { SettingsList } from './settings/components/settingsList';

export function WelcomeComponent() {
  const [isOnClick, setOnClick] = useState(false);
  const showSettingsList = () => {
    setOnClick(true);
  };

  return (
    <div className={classes.welcome_wrapper}>
      <p>Welcome to Meal Tracker</p>
      <button className={classes.btn_settings} onClick={showSettingsList}>
        <img
          className={classes.settingsIcon}
          src='http://cdn.onlinewebfonts.com/svg/img_79951.png'
          alt='settings icon'
        />
      </button>

      {isOnClick && <SettingsList />}
    </div>
  );
}
