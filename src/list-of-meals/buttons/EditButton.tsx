import React, { useState } from 'react';
import { Button } from '../../buttons/Button';
import ModalWindowWithTime from '../ModalWindowWithTime';

interface IEditButton {
  allMealsLength: number;
}

export const EditButton = ({ allMealsLength }: IEditButton) => {
  const [isClick, setIsClick] = useState(false);

  const handleSubmitForEdit = () => {
    setIsClick(true);
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
      {isClick && <ModalWindowWithTime />}
    </div>
  );
};
