import React, { useEffect, useState } from 'react';
import { mealsManagerBL } from './Meals';
import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';

export const WrapperForMeals = () => {
  const [allMeals, setAllMeals] = useState<IMealItemUi[]>([]);

  useEffect(() => {
    const mealsBL = mealsManagerBL.getMealListBL();

    setAllMeals(mealMapper.fromBLToUi(mealsBL));
  }, []);

  const mealsForUi = allMeals.map((item) => {
    return (
      <Meal key={item.number} number={item.number} timeOfMeal={item.mealTime} />
    );
  });

  return <div>{mealsForUi} </div>;
};
