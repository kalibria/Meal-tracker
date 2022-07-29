import React, { useEffect, useState } from 'react';
import { mealsManagerBL } from './Meals';

export const WrapperForMeal = () => {
  const [allMeals, setAllMeals] = useState(() => {
    return mealsManagerBL.getMealListBL();
  });

  console.log('allTimes', allMeals);

  return <div>hhgfdg</div>;
};
