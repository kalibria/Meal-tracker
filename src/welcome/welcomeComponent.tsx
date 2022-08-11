import React from 'react';
import classes from './welcom.module.css';
import { SettingsBtn } from '../buttons/settingsBtn';
import style from '../buttons/btnSettings.module.css';

export function WelcomeComponent() {
  return (
    <>
      <div className={style.btn_settings_position}>
        <SettingsBtn />
      </div>

      <div className={classes.welcome_wrapper}>
        <p>Welcome to Meal Tracker</p>
      </div>
    </>
  );
}
