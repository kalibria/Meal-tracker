import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from './mealsManager';
import { currentTime } from '../utility/currentTime';
import { useDispatch } from 'react-redux';
import { setListOfMeals } from './mealsSlice';

interface IWrapperForMeals {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WrapperForMeals = ({ setShowModal }: IWrapperForMeals) => {
  const dispatch = useDispatch();
  const [allMeals, setAllMeals] = useState<IMealItemUi[]>(
    mealMapper.fromBLToUi(mealsManagerBL.getActualMealListBL())
  );
  const [isDeleteBtnDisable, setIsDeleteBtnDisable] = useState(false);

  useEffect(() => {
    const mealsBL = mealsManagerBL.getActualMealListBL();

    if (mealsBL) setAllMeals(mealMapper.fromBLToUi(mealsBL));
  }, []);

  useEffect(() => {
    myLocalStorage.setMealListBL(mealMapper.mealsFromUiToBl(allMeals));
    dispatch(setListOfMeals(myLocalStorage.getMealListBL()));
  }, [allMeals]);

  const handleSubmitForEat = (mealOrderNum: number) => {
    return () => {
      setAllMeals(() => {
        const timeOnClickMs = currentTime.getCurrentTime();

        const newMeals = mealMapper.fromUIToBL(
          allMeals,
          mealOrderNum,
          timeOnClickMs
        );

        if (mealOrderNum - 1 === allMeals.length) {
          setIsDeleteBtnDisable(true);
        }

        return newMeals;
      });
    };
  };

  const lastOrderNumber = allMeals.length;

  const mealsForUi = allMeals.map((item) => {
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
        allMealsLength={allMeals.length}
        setShowModal={setShowModal}
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
