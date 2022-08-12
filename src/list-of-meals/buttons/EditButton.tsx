import React from 'react';
import { Button } from '../../buttons/Button';
import ModalWindowWithTime from '../ModalWindowWithTime';

interface IEditButton {
  allMealsLength: number;
  //  handleSubmitForEdit: React.MouseEventHandler<HTMLButtonElement>;
  // handleSubmitForEdit: React.MouseEventHandler<HTMLButtonElement>;
}

export const EditButton = ({ allMealsLength }: IEditButton) => {
  const handleSubmitForEdit = () => {
    console.log('hi');
  };

  return (
    <div>
      {allMealsLength === 6 && (
        <Button
          disabled={false}
          handleClick={handleSubmitForEdit}
          text={'Edit'}
        />
      )}
      <ModalWindowWithTime />
    </div>
  );
};
