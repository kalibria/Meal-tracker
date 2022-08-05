import React from 'react';
import { Button } from '../buttons/Button';

interface IEatButton {
  disabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
}

export const Eat_button = ({ disabled, handleSubmitForEat }: IEatButton) => {
  return (
    <Button disabled={disabled} handleClick={handleSubmitForEat} text={'Eat'} />
  );
};
