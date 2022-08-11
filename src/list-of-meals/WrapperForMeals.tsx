import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from './mealsManager';
import { currentTime } from '../utility/currentTime';

export const WrapperForMeals = () => {
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
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
