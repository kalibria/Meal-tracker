import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from './Meals';

export const WrapperForMeals = () => {
  const [allMeals, setAllMeals] = useState<IMealItemUi[]>([]);

  useEffect(() => {
    const mealsBL = mealsManagerBL.getMealListBL();

    if (mealsBL) setAllMeals(mealMapper.fromBLToUi(mealsBL));
  }, []);

  useEffect(() => {
    myLocalStorage.setMealList(allMeals);
  }, [allMeals]);

  const handleSubmitForEat = (mealOrderNum: number) => {
    return () => {
      console.log('mealOrderNum', mealOrderNum);
    };
  };

  const mealsForUi = allMeals.map((item, index) => {
    if (index === 0) {
      item.eaten = true;
    }
    return (
      <Meal
        key={item.number}
        number={item.number}
        timeOfMeal={item.mealTime}
        disabled={item.eaten}
        handleSubmitForEat={handleSubmitForEat(item.number)}
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
