import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './btnSettings.module.css';
import { Button } from './button';
import { myLocalStorage } from '../utility/LocalStorage';
import { settingsScreen } from '../settings/settingsConfig';

export const SettingsBtn = () => {
  const navigate = useNavigate();
  const showSettingsList = () => {
    navigate('/settings');
  };

  return (
    <Button handleClick={showSettingsList}>
      <img
        className={style.settingsIcon}
        src='http://cdn.onlinewebfonts.com/svg/img_79951.png'
        alt='settings icon'
      />{' '}
    </Button>
  );
};
