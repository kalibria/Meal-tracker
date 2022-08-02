import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';

export const WrapperForMeals = () => {
  const [allMeals, setAllMeals] = useState<IMealItemUi[]>([]);

  useEffect(() => {
    const mealsBL = myLocalStorage.getMealList();
    if (mealsBL) setAllMeals(mealMapper.fromBLToUi(mealsBL));
  }, []);

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
        disabled={true}
        handleSubmitForEat={handleSubmitForEat(item.number)}
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
