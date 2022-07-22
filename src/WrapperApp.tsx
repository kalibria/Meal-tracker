import React from 'react';
import './index.css';
import App from './App';
import { useSelector } from 'react-redux';
import { keyOfScreenWithBtn } from './redux/selectors';

export const WrapperApp = () => {
  const keySelector = useSelector(keyOfScreenWithBtn);
  return <App key={keySelector.toString()} />;
};
