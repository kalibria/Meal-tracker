import React from 'react';
import { Button } from '../../buttons/Button';
import { iconEaten } from '../constantOfListOfMeal';

interface IEatButton {
  disabled: boolean;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
  eaten: boolean;
}

export const EatButton = ({
  disabled,
  handleSubmitForEat,
  eaten,
}: IEatButton) => {
  return (
    <div>
      {eaten ? (
        <img src={iconEaten} alt={'icon'} width={'30px'} />
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
