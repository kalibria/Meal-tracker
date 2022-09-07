import React from 'react';
import { Button } from '../../buttons/Button';
import { useDispatch } from 'react-redux';
import { addExtraMeal } from '../mealsSlice';

export const AddExtraMEalButton = () => {
  const dispatch = useDispatch();

  const handleClickAddExtraMeal = () => {
    dispatch(addExtraMeal());
  };
  return (
    <Button text={'Add extra meal'} handleClick={handleClickAddExtraMeal} />
  );
};
