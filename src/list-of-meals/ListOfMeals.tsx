import React from 'react';
import style from '../buttons/btnSettings.module.css';
import { WrapperForMeals } from './WrapperForMeals';
import { AddExtraMEalButton } from './buttons/AddExtraMEalButton';
import { EndTheDayButton } from './buttons/EndTheDayButton';

interface IListOfMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListOfMeals = ({ setShowModal }: IListOfMeals) => {
  return (
    <div className={style.listOfMeals}>
      <WrapperForMeals setShowModal={setShowModal} />
      <div className={style.btn_position}>
        <AddExtraMEalButton />
        <EndTheDayButton />
      </div>
    </div>
  );
};
