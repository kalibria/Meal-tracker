import React, { useEffect, useState } from 'react';
import { mealsManagerBL } from './Meals';
import { mealMapper } from './meal.mapper';

export const WrapperForMeal = () => {
  // const [allMeals, setAllMeals] = useState(() => {
  //   return mealMapper.fromBLToUi(mealsManagerBL.getMealListBL());
  // });
  useEffect(() => {
    const mealListBl = mealsManagerBL.getMealListBL();
    const mealListUI = mealMapper.fromBLToUi(mealListBl);

    console.log('mealListBl', mealListBl);
    console.log('mealListUI', mealListUI);
  }, []);

  return <div>hhgfdg</div>;
};
