import React from 'react';
import { Button } from '../../buttons/Button';
import { useNavigate } from 'react-router-dom';
import { KnownRoutes } from '../../enumsForApp';
import { useDispatch } from 'react-redux';
import { removeMealList } from '../mealsSlice';

export const EndTheDayButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToFirstRouteEl = () => {
    navigate(KnownRoutes.WELCOME);

    return;
  };
  const handleClick = () => {
    dispatch(removeMealList('mealList'));
    goToFirstRouteEl();
  };

  return <Button text={'End the day'} handleClick={handleClick} />;
};
