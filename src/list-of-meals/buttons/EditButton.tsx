import React from 'react';
import { Button } from '../../buttons/Button';

interface IEditButton {
  allMealsLength: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditButton = ({ allMealsLength, setShowModal }: IEditButton) => {
  const handleSubmitForEdit = () => {
    setShowModal(true);
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
    </div>
  );
};
