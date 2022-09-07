import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttons/Button';
import style from '../buttons/btnSettings.module.css';
import { KnownRoutes } from '../enumsForApp';
import { WrapperForMeals } from './WrapperForMeals';
import { AddExtraMEalButton } from './buttons/AddExtraMEalButton';

interface IListOfMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListOfMeals = ({ setShowModal }: IListOfMeals) => {
  const navigate = useNavigate();

  const goToFirstRouteEl = () => {
    navigate(KnownRoutes.WELCOME);

    return;
  };
  const handleClick = () => {
    goToFirstRouteEl();
  };
  return (
    <div>
      <WrapperForMeals setShowModal={setShowModal} />
      <div className={style.btn_position}>
        <AddExtraMEalButton />
        <Button text={'End the day'} handleClick={handleClick} />
      </div>
    </div>
  );
};
