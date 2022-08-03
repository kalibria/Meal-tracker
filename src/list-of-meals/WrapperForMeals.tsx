import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from './mealsManager';

export const WrapperForMeals = () => {
  const [allMeals, setAllMeals] = useState<IMealItemUi[]>([]);

  console.log(allMeals);
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

      setAllMeals((prevState) => {
        const newMeals = [...prevState];
        const lastMeal = newMeals.length - 1;

        if (mealOrderNum - 1 === lastMeal) {
          newMeals[mealOrderNum - 1].eatButtonDisabled = true;
          newMeals[mealOrderNum - 1].eaten = true;
        } else {
          newMeals[mealOrderNum].eaten = true;
          newMeals[mealOrderNum - 1].eatButtonDisabled = true;
          newMeals[mealOrderNum].eatButtonDisabled = false;
        }

        return newMeals;
      });
    };
  };

  const mealsForUi = allMeals.map((item) => {
    return (
      <Meal
        key={item.number}
        number={item.number}
        timeOfMeal={item.mealTime}
        eatButtonDisabled={item.eatButtonDisabled}
        handleSubmitForEat={handleSubmitForEat(item.number)}
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
