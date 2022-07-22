import React from 'react';
import { WindowWithButton } from '../buttonsWindow/WindowWithButton';
import { WelcomeComponent } from '../welcome/welcomeComponent';
import { firstEntry } from '../welcome/showWelcomeComponent';

export const SecondRuteEl = () => {
  return firstEntry.wasUsed() ? <WindowWithButton /> : <WelcomeComponent />;
};
