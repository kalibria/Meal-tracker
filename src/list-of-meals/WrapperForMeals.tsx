import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from './mealsManager';
import { currentTime } from '../utility/currentTime';
import { useDispatch, useSelector } from 'react-redux';
import { setListOfMeals } from './mealsSlice';
import { selectEditMealOrderNumber, selectMealsList } from '../redux/selectors';

interface IWrapperForMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WrapperForMeals = ({ setShowModal }: IWrapperForMeals) => {
  const mealListFromRedux = useSelector(selectMealsList);
  const mealListUi = mealMapper.fromBLToUi(mealListFromRedux);
  const dispatch = useDispatch();

  const [isDeleteBtnDisable, setIsDeleteBtnDisable] = useState(false);

  const lastOrderNumber = mealListFromRedux.length;

  const handleSubmitForEat = (mealOrderNum: number) => {
    return () => {
      const timeOnClickMs = currentTime.getCurrentTime();
      // const allMealsUi = mealMapper.fromBLToUi(mealListFromRedux);

      const newMeals = mealMapper.fromUIToBL(
        mealListUi,
        mealOrderNum,
        timeOnClickMs
      );

      if (mealOrderNum - 1 === mealListUi.length) {
        setIsDeleteBtnDisable(true);
      }

      dispatch(setListOfMeals(mealMapper.mealsFromUiToBl(newMeals)));

      return newMeals;
    };
  };

  const mealsForUi = mealListUi.map((item) => {
    return (
      <Meal
        key={item.number}
        number={item.number}
        timeOfMeal={item.mealTime}
        eatButtonDisabled={item.eatButtonDisabled}
        handleSubmitForEat={handleSubmitForEat(item.number)}
        conditionForDeleteBtn={item.number === lastOrderNumber}
        isDeleteBtnActive={isDeleteBtnDisable}
        eaten={item.eaten}
        allMealsLength={mealListFromRedux.length}
        setShowModal={setShowModal}
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
