import React from 'react';
import { Button } from '../../buttons/Button';
import { iconEaten } from '../constantOfListOfMeal';

interface IEditButton {
  allMealsLength: number;
  // disabled: boolean;
  //  handleSubmitForEdit: React.MouseEventHandler<HTMLButtonElement>;
  handleSubmitForEat: React.MouseEventHandler<HTMLButtonElement>;
}

export const EditButton = ({
  allMealsLength,
  handleSubmitForEat,
}: IEditButton) => {
  return (
    <div>
      {allMealsLength === 6 && (
        <Button
          // disabled={disabled}
          handleClick={handleSubmitForEat}
          text={'Edit'}
        />
      )}
    </div>
  );
};
