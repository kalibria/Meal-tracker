import React from 'react';
import { Button } from '../../buttons/Button';

interface IDeleteButton {
  disabled: boolean;
}

export const DeleteButton = ({ disabled }: IDeleteButton) => {
  const handleClickOnDelete = () => {
    console.log('deleteBTN');
  };

  return (
    <div>
      <Button
        handleClick={handleClickOnDelete}
        text={'Delete'}
        disabled={disabled}
      />
    </div>
  );
};
