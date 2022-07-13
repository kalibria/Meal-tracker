import React from 'react';
import classes from './welcom.module.css';
import { SettingsBtn } from '../buttonsWindow/settingsBtn';

export function WelcomeComponent() {
  return (
    <>
      <SettingsBtn />
      <div className={classes.welcome_wrapper}>
        <p>Welcome to Meal Tracker</p>
      </div>
    </>
  );
}
