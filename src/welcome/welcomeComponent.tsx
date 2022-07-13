import React from 'react';
import classes from './welcom.module.css';

export function WelcomeComponent() {
  return (
    <div className={classes.welcome_wrapper}>
      <p>Welcome to Meal Tracker</p>
    </div>
  );
}
