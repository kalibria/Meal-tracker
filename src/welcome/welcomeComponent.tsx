import React from 'react';
import classes from './welcom.module.css';

export function WelcomeComponent() {
  return (
    <div className={classes.welcome_wrapper}>
      <p>Welcome to Meal Tracker</p>
      <button className={classes.btn_settings}>
        <img
          className={classes.settingsIcon}
          src='http://cdn.onlinewebfonts.com/svg/img_79951.png'
          alt='settings icon'
        />
      </button>
    </div>
  );
}
