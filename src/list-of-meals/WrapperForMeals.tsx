import React, { useEffect, useState } from 'react';

import { mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import style from '../settings/components/settings.module.css';

import { currentTime } from '../utility/currentTime';
import { batch, useDispatch, useSelector } from 'react-redux';
import { setListOfMeals, isSetNewMeal } from './mealsSlice';
import {
  selectEditMealOrderNumber,
  selectIsSetNewMealTime,
  selectMealsList,
} from '../redux/selectors';

interface IWrapperForMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WrapperForMeals = ({ setShowModal }: IWrapperForMeals) => {
  const dispatch = useDispatch();
  const isMealTimeCorrect = useSelector(selectIsSetNewMealTime);
  const editMealNumber = useSelector(selectEditMealOrderNumber);

  const mealListFromRedux = useSelector(selectMealsList);

  useEffect(() => {
    myLocalStorage.setMealListBL(mealListFromRedux);
  }, [mealListFromRedux]);

  const mealListUi = mealMapper.fromBLToUi(mealListFromRedux);

  const [isDeleteBtnDisable, setIsDeleteBtnDisable] = useState(false);

  const lastOrderNumber = mealListFromRedux.length;

  const handleSubmitForEat = (mealOrderNum: number) => {
    return () => {
      const timeOnClickMs = currentTime.getCurrentTime();

      const newMeals = mealMapper.fromUIToBL(
        mealListUi,
        mealOrderNum,
        timeOnClickMs
      );

      if (mealOrderNum - 1 === mealListUi.length) {
        setIsDeleteBtnDisable(true);
      }

      batch(() => {
        dispatch(setListOfMeals(mealMapper.mealsFromUiToBl(newMeals)));
        dispatch(isSetNewMeal(true));
      });

      return newMeals;
    };
  };

  const mealsForUi = mealListUi.map((item) => {
    return (
      <>
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
        <div key={item.number * 10} className={style.error}>
          {!isMealTimeCorrect && item.number === editMealNumber && (
            <p>Next meal time must be after the last eaten meal’s time</p>
          )}
        </div>
      </>
    );
  });

  return <div>{mealsForUi} </div>;
};
