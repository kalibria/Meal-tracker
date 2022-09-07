import React from 'react';
import { Button } from '../../buttons/Button';

interface IAddExtraMEalButton {
  setIsAddExtraMeal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddExtraMEalButton = ({
  setIsAddExtraMeal,
}: IAddExtraMEalButton) => {
  const handleClickAddExtraMeal = () => {
    setIsAddExtraMeal(true);
  };
  return (
    <Button text={'Add extra meal'} handleClick={handleClickAddExtraMeal} />
  );
};
