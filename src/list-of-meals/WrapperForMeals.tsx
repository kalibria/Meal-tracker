import React, { useEffect } from 'react';

import { mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import style from '../settings/components/settings.module.css';

import { currentTime } from '../utility/currentTime';
import { batch, useDispatch, useSelector } from 'react-redux';
import { setListOfMeals, isSetNewMeal, addExtraMeal } from './mealsSlice';
import {
  selectEditMealOrderNumber,
  selectIsSetNewMealTime,
  selectMealsList,
} from '../redux/selectors';
import { SnackbarComponent } from './Snackbar/SnackbarComponent';
import { mealsManagerBL } from './mealsManager';

interface IWrapperForMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WrapperForMeals = ({ setShowModal }: IWrapperForMeals) => {
  const dispatch = useDispatch();
  const isMealTimeCorrect = useSelector(selectIsSetNewMealTime);
  const editMealNumber = useSelector(selectEditMealOrderNumber);
  const isSetNewMealTime = useSelector(selectIsSetNewMealTime);

  const mealListFromRedux = useSelector(selectMealsList);

  useEffect(() => {
    myLocalStorage.setMealListBL(mealListFromRedux);
  }, [isSetNewMealTime, mealListFromRedux]);

  useEffect(() => {
    if (mealsManagerBL.checkEaten(mealListFromRedux)) {
      const questionAddExtraMeal = confirm(
        'Would you like to create an extra meal?'
      );
      if (questionAddExtraMeal) {
        dispatch(addExtraMeal());
      }
    }
  }, [dispatch, mealListFromRedux]);

  const mealListUi = mealMapper.fromBLToUi(mealListFromRedux);

  const lastOrderNumber = mealListFromRedux.length;

  const handleSubmitForEat = (mealOrderNum: number) => {
    return () => {
      const timeOnClickMs = currentTime.getCurrentTime();

      const newMeals = mealMapper.fromUIToBL(
        mealListUi,
        mealOrderNum,
        timeOnClickMs
      );

      batch(() => {
        dispatch(setListOfMeals(mealMapper.mealsFromUiToBl(newMeals)));
        dispatch(isSetNewMeal(true));
      });

      return newMeals;
    };
  };

  const mealsForUi = mealListUi.map((item) => {
    return (
      <React.Fragment key={item.number}>
        <Meal
          number={item.number}
          timeOfMeal={item.mealTime}
          eatButtonDisabled={item.eatButtonDisabled}
          handleSubmitForEat={handleSubmitForEat(item.number)}
          conditionForDeleteBtn={item.number === lastOrderNumber}
          eaten={item.eaten}
          allMealsLength={mealListFromRedux.length}
          setShowModal={setShowModal}
        />

        <div className={style.error}>
          {!isMealTimeCorrect && item.number === editMealNumber && (
            <SnackbarComponent />
          )}
        </div>
      </React.Fragment>
    );
  });

  return <div>{mealsForUi} </div>;
};
