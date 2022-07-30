import React, { useEffect, useState } from 'react';
import { mealsManagerBL } from './Meals';
import { mealMapper } from './meal.mapper';
import { Meal } from './Meal';

export const WrapperForMeal = () => {
  const [allMeals, setAllMeals] = useState(() => {
    return mealMapper.fromBLToUi(mealsManagerBL.getMealListBL());
  });

  const mealsForUi = allMeals.map((item) => {
    return (
      <Meal key={item.number} number={item.number} timeOfMeal={item.mealTime} />
    );
  });

  return <div>{mealsForUi} </div>;
};
