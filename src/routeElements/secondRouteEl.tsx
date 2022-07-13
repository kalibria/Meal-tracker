import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WindowWithButton } from '../buttonsWindow/windowWithButton';
import { WelcomeComponent } from '../welcome/welcomeComponent';
import { firstEntry } from '../welcome/showWelcomeComponent';
import { Button } from '../buttonsWindow/button';
import classes from '../settings/settings.module.css';

export const SecondRuteEl = () => {
  const navigate = useNavigate();

  const showSettingsList = () => {
    navigate('/settings');
  };
  return (
    <>
      <Button className={classes.btn_settings} handleClick={showSettingsList}>
        <img
          className={classes.settingsIcon}
          src='http://cdn.onlinewebfonts.com/svg/img_79951.png'
          alt='settings icon'
        />{' '}
      </Button>
      {firstEntry.wasUsed() ? <WindowWithButton /> : <WelcomeComponent />}
    </>
  );
};
