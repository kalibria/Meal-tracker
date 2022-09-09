import React, { useEffect, useState } from 'react';
import { Button } from '../../buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addExtraMeal } from '../mealsSlice';
import { selectMealsList } from '../../redux/selectors';
import { defaultLatestTime } from '../constantOfListOfMeal';
import { timeManager } from '../../utility/time.manager';
import styles from '../meals.module.css';

export const AddExtraMEalButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const meals = useSelector(selectMealsList);
  const lastMealTime = meals[meals.length - 1].mealTime;

  const handleClickAddExtraMeal = () => {
    dispatch(addExtraMeal());
  };

  useEffect(() => {
    const defaultLatestMealTimeBL =
      timeManager.timeFromUIToBL(defaultLatestTime);
    if (lastMealTime === defaultLatestMealTimeBL) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [lastMealTime]);

  console.log('isDisabledExtraMeeal', isDisabled);

  return (
    <Button
      text={'+ Add extra meal'}
      handleClick={handleClickAddExtraMeal}
      disabled={isDisabled}
      classNames={
        isDisabled ? [styles.disabledExtraMeal] : [styles.addExtraMeal]
      }
    />
  );
};
