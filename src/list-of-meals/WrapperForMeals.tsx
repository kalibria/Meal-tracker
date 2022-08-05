import React, { useEffect, useState } from 'react';

import { IMealItemUi, mealMapper } from './meal.mapper';
import { Meal } from './Meal';
import { myLocalStorage } from '../utility/LocalStorage';
import { mealsManagerBL } from './mealsManager';

export const WrapperForMeals = () => {
  const [allMeals, setAllMeals] = useState<IMealItemUi[]>([]);
  const [isDeleteBtnDisable, setIsDeleteBtnDisable] = useState(false);

  useEffect(() => {
    const mealsBL = mealsManagerBL.getMealListBL();

    if (mealsBL) setAllMeals(mealMapper.fromBLToUi(mealsBL));
  }, []);

  useEffect(() => {
    myLocalStorage.setMealList(allMeals);
  }, [allMeals]);

  const handleSubmitForEat = (mealOrderNum: number) => {
    return () => {
      setAllMeals((prevState) => {
        const newMeals = [...prevState];
        const lastMeal = newMeals.length - 1;

        if (mealOrderNum - 1 === lastMeal) {
          newMeals[mealOrderNum - 1].eatButtonDisabled = true;
          newMeals[mealOrderNum - 1].eaten = true;
          setIsDeleteBtnDisable(true);
        } else {
          newMeals[mealOrderNum].eaten = true;
          newMeals[mealOrderNum - 1].eatButtonDisabled = true;
          newMeals[mealOrderNum].eatButtonDisabled = false;
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
      />
    );
  });

  return <div>{mealsForUi} </div>;
};
