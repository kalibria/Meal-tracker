import React from 'react';
import { Button } from '../buttons/Button';

interface IEatButton {
  disabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
  eatenIcon: string;
}

export const EatButton = ({
  disabled,
  handleSubmitForEat,
  eatenIcon,
}: IEatButton) => {
  return (
    <div>
      {eatenIcon !== '' ? (
        <img src={eatenIcon} alt={'icon'} width={'30px'} />
      ) : (
        <Button
          disabled={disabled}
          handleClick={handleSubmitForEat}
          text={'Eat'}
        />
      )}
    </div>
  );
};
