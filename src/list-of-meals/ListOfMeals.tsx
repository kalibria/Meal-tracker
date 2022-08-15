import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttons/Button';
import style from '../buttons/btnSettings.module.css';
import { WrapperForMeals } from './WrapperForMeals';
import { KnownRoutes } from '../enumsForApp';

interface IListOfMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListOfMeals = ({ setShowModal }: IListOfMeals) => {
  const navigate = useNavigate();
  const goToFirstRouteEl = () => {
    navigate(KnownRoutes.WELCOME);
  };
  const handleClick = () => {
    goToFirstRouteEl();
  };
  return (
    <div>
      <WrapperForMeals setShowModal={setShowModal} />
      <div className={style.btn_position}>
        <Button text={'End the day'} handleClick={handleClick} />
      </div>
    </div>
  );
};
