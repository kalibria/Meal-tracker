import React from 'react';
import { Button } from './button';

interface IWindowWithButtons {
  handleClick(): void;
  isMorning: boolean;
}

export const WindowWithButton = ({
  handleClick,
  isMorning,
}: IWindowWithButtons) => {
  return (
    <div>
      <Button
        text={isMorning ? 'Good morning!!!' : 'Plan your meals'}
        handleClick={handleClick}
        dataTest={'goodMorning'}
      ></Button>
    </div>
  );
};
